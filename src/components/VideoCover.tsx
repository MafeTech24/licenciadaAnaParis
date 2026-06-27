/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

export default function VideoCover() {
  const [isMuted, setIsMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const scrollToContent = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // 1. Load the YouTube IFrame Player API code asynchronously if not already present.
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    let player: any;
    let fallbackTimeout: NodeJS.Timeout;

    const initializePlayer = () => {
      const YT = (window as any).YT;
      if (!iframeRef.current || !YT || !YT.Player) return;

      player = new YT.Player(iframeRef.current, {
        events: {
          onReady: (event: any) => {
            playerRef.current = event.target;
            setPlayerReady(true);

            // Attempt autoplay with sound (unmuted)
            try {
              event.target.unMute();
              event.target.setVolume(100);
              event.target.playVideo();
              setIsMuted(false);
            } catch (error) {
              console.warn("Initial unmuted autoplay attempt failed. Fallback to muted playback.", error);
              event.target.mute();
              event.target.playVideo();
              setIsMuted(true);
            }

            // Fallback check after 1.5 seconds:
            // If the browser blocked autoplay, the player state won't be playing (1) or buffering (3).
            fallbackTimeout = setTimeout(() => {
              const state = event.target.getPlayerState();
              if (state !== 1 && state !== 3) {
                console.log(`Autoplay with audio blocked (state: ${state}). Falling back to muted playback.`);
                event.target.mute();
                event.target.playVideo();
                setIsMuted(true);
              }
            }, 1500);
          },
          onStateChange: (event: any) => {
            // Synchronize control button state in case API changes player status
            if (event.target.isMuted) {
              setIsMuted(event.target.isMuted());
            }
          }
        }
      });
    };

    // If YT API is already loaded, initialize immediately
    const YT = (window as any).YT;
    if (YT && YT.Player) {
      initializePlayer();
    } else {
      // Otherwise set/augment standard callback
      const prevCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initializePlayer();
      };
    }

    // Interval fallback in case script is loaded but event hasn't fired yet
    const interval = setInterval(() => {
      const currentYT = (window as any).YT;
      if (currentYT && currentYT.Player && !playerRef.current) {
        clearInterval(interval);
        initializePlayer();
      }
    }, 200);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, []);

  const toggleMute = () => {
    if (!playerRef.current || !playerReady) return;

    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <section
      id="video-cover"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-bg-dark"
    >
      {/* Background Video (YouTube Embed) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          src="https://www.youtube-nocookie.com/embed/AccOmHi3Nu0?autoplay=1&loop=1&playlist=AccOmHi3Nu0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
          title="Video Cover"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-full min-h-[56.25vw] aspect-[16/9]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      {/* Opacity Overlay has been removed for better direct presentation */}

      {/* Bouncing scroll indicator at bottom */}
      {/*<motion.button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-brand-cream/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 stroke-[1.5]" />
        </motion.div>
      </motion.button>*/}

      {/* Sound Control Button */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-10 right-6 sm:right-10 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-bg-dark/40 backdrop-blur-md border border-white/10 text-brand-cream hover:bg-brand-bg-dark/60 hover:text-white transition-all cursor-pointer focus:outline-none shadow-lg text-xs font-semibold uppercase tracking-wider"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-brand-cream" />
            <span>Activar sonido</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-brand-cream" />
            <span>Silenciado</span>
          </>
        )}
      </motion.button>
    </section>
  );
}

