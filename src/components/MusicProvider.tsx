"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type MusicContextValue = {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  toggle: () => void;
  toggleMute: () => void;
  seek: (percent: number) => void;
  suspendForVideo: () => void;
  resumeAfterVideo: () => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

const MUSIC_SRC = "/videos/Intro/PALMITO%20-%20La%20Cuarta%20Estrella.mp3";

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const gestureCleanupRef = useRef<(() => void) | null>(null);
  const wasPlayingBeforeVideoRef = useRef(false);
  const mutedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const removeGestureFallback = () => {
    gestureCleanupRef.current?.();
    gestureCleanupRef.current = null;
  };

  const play = async () => {
    const music = audioRef.current;

    if (!music) {
      return false;
    }

    try {
      music.loop = true;
      music.muted = mutedRef.current;
      music.volume = 0.72;

      if (music.readyState === 0) {
        music.load();
      }

      await music.play();
      removeGestureFallback();
      setIsPlaying(true);
      return true;
    } catch {
      setIsPlaying(false);
      return false;
    }
  };

  const installGestureFallback = () => {
    if (gestureCleanupRef.current) {
      return;
    }

    const resume = () => {
      void play();
    };

    window.addEventListener("click", resume, { once: true });
    window.addEventListener("keydown", resume, { once: true });
    window.addEventListener("touchend", resume, { once: true });

    gestureCleanupRef.current = () => {
      window.removeEventListener("click", resume);
      window.removeEventListener("keydown", resume);
      window.removeEventListener("touchend", resume);
    };
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void play().then((started) => {
        if (!started) {
          installGestureFallback();
        }
      });
    }, 350);

    return () => {
      window.clearTimeout(timer);
      removeGestureFallback();
    };
  }, []);

  const toggle = () => {
    const music = audioRef.current;

    if (!music) {
      return;
    }

    if (!music.paused) {
      music.pause();
      return;
    }

    void play();
  };

  const toggleMute = () => {
    const next = !mutedRef.current;
    mutedRef.current = next;
    setIsMuted(next);

    const music = audioRef.current;

    if (music) {
      music.muted = next;
    }
  };

  const seek = (percent: number) => {
    const music = audioRef.current;

    if (!music || !duration) {
      return;
    }

    const nextTime = (percent / 100) * duration;
    music.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const suspendForVideo = () => {
    const music = audioRef.current;

    if (!music) {
      return;
    }

    wasPlayingBeforeVideoRef.current = !music.paused;
    music.pause();
  };

  const resumeAfterVideo = () => {
    if (wasPlayingBeforeVideoRef.current) {
      void play();
    }

    wasPlayingBeforeVideoRef.current = false;
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        isMuted,
        currentTime,
        duration,
        toggle,
        toggleMute,
        seek,
        suspendForVideo,
        resumeAfterVideo,
      }}
    >
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        preload="auto"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onError={() => setIsPlaying(false)}
      />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }

  return context;
}
