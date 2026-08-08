import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Ending.css";

export default function Ending() {
  const [started, setStarted] = useState(false);

  const [birthday, setBirthday] = useState("");
  const [highlight, setHighlight] = useState("");
  const [lastMessage, setLastMessage] = useState("");

  const [showPromiseButton, setShowPromiseButton] = useState(false);
  const [showPromise, setShowPromise] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const birthdayText = "Happy Birthday,\nMy Solace.";

  const highlightText = "You are deeply valued.";

  const lastText = `Here's to all the memories we've made,
all the ones still waiting for us,
and a bond that only gets better with time.`;

  // Birthday typing
  useEffect(() => {
    if (!started) return;

    let index = 0;

    const timer = setInterval(() => {
      setBirthday(birthdayText.slice(0, index + 1));
      index++;

      if (index >= birthdayText.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [started]);

  // Highlight typing
  useEffect(() => {
    if (birthday !== birthdayText) return;

    const delay = setTimeout(() => {
      let index = 0;

      const timer = setInterval(() => {
        setHighlight(highlightText.slice(0, index + 1));
        index++;

        if (index >= highlightText.length) {
          clearInterval(timer);
        }
      }, 75);

      return () => clearInterval(timer);
    }, 1000);

    return () => clearTimeout(delay);
  }, [birthday]);

  // Final message typing
  useEffect(() => {
    if (highlight !== highlightText) return;

    const delay = setTimeout(() => {
      let index = 0;

      const timer = setInterval(() => {
        setLastMessage(lastText.slice(0, index + 1));
        index++;

        if (index >= lastText.length) {
          clearInterval(timer);
        }
      }, 35);

      return () => clearInterval(timer);
    }, 1000);

    return () => clearTimeout(delay);
  }, [highlight]);

  // Show promise button after everything finishes
  useEffect(() => {
    if (lastMessage !== lastText) return;

    const timer = setTimeout(() => {
      setShowPromiseButton(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, [lastMessage]);

  const openPromise = () => {
    setShowPromise(true);
  };

  const acceptPromise = () => {
    setAccepted(true);
  };

  return (
    <section className="ending">
      {/* Cinematic background video */}
      <video
        className="ending-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/ending-bg.mp4" type="video/mp4" />
      </video>

      {/* Ambient glow */}
      <div className="ending-glow ending-glow-one" />
      <div className="ending-glow ending-glow-two" />

      {/* Floating particles */}
      <div className="ending-particles">
        {Array.from({ length: 15 }).map((_, index) => (
          <span key={index}>✦</span>
        ))}
      </div>

      {/* Floating stars */}
      <motion.span
        className="ending-star star-one"
        animate={{
          y: [0, -14, 0],
          opacity: [0.25, 0.85, 0.25],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.span>

      <motion.span
        className="ending-star star-two"
        animate={{
          y: [0, 12, 0],
          opacity: [0.2, 0.7, 0.2],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✧
      </motion.span>

      {/* Extra sparkles */}
      <motion.span
        className="ending-sparkle sparkle-one"
        animate={{
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.4, 0.5],
          rotate: [0, 45, 90],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.span>

      <motion.span
        className="ending-sparkle sparkle-two"
        animate={{
          opacity: [0, 0.65, 0],
          scale: [0.4, 1.2, 0.4],
          rotate: [0, -45, -90],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 3,
          ease: "easeInOut",
        }}
      >
        ✧
      </motion.span>

      {/* Main content */}
      <div className="ending-content">
        {/* Small heading */}
        <motion.p
          className="ending-small"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onAnimationComplete={() => setStarted(true)}
        >
          AND NOW...
        </motion.p>

        {/* Symbol */}
        <motion.div
          className="ending-symbol"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          ✦
        </motion.div>

        {/* Birthday */}
        <motion.h2
          className="ending-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {birthday.split("\n")[0]}
          <br />
          {birthday.split("\n")[1]}

          {birthday && birthday !== birthdayText && (
            <span className="ending-cursor">|</span>
          )}
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="ending-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          viewport={{ once: true }}
        />

        {/* Intro */}
        <motion.p
          className="ending-message"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          I hope this little story reminds you
          <br />
          of one simple thing...
        </motion.p>

        {/* Highlight */}
        <motion.p
          className="ending-highlight"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: highlight ? 1 : 0,
            y: highlight ? 0 : 20,
          }}
          transition={{ duration: 1 }}
        >
          {highlight}

          {highlight && highlight !== highlightText && (
            <span className="ending-cursor">|</span>
          )}
        </motion.p>

        {/* Final message */}
        <motion.p
          className="ending-last"
          initial={{ opacity: 0 }}
          animate={{
            opacity: lastMessage ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          {lastMessage.split("\n")[0]}
          <br />
          {lastMessage.split("\n")[1]}
          <br />
          {lastMessage.split("\n")[2]}

          {lastMessage && lastMessage !== lastText && (
            <span className="ending-cursor">|</span>
          )}
        </motion.p>

        {/* Signature */}
        <motion.div
          className="ending-signature"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: lastMessage === lastText ? 1 : 0,
            y: lastMessage === lastText ? 0 : 15,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          With love,
          <br />
          <span>Your Rakshasi ♡</span>
        </motion.div>

        {/* The end */}
        <motion.div
          className="ending-bottom"
          initial={{ opacity: 0 }}
          animate={{
            opacity: lastMessage === lastText ? 1 : 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1.5,
          }}
        >
          <span>THE END</span>

          <i>but definitely not the end of the story</i>
        </motion.div>

        
        {/* Promise button */}
        <AnimatePresence>
          {showPromiseButton && !showPromise && (
            <motion.button
              className="promise-trigger"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 1,
              }}
              onClick={openPromise}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <span>Make Me One Promise</span>
              <span className="promise-heart">♡</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Promise overlay */}
      <AnimatePresence>
        {showPromise && (
          <motion.div
            className="promise-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="promise-card"
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <button
  className="promise-close"
  onClick={() => setShowPromise(false)}
  aria-label="Close promise"
>
  ×
</button>
              {!accepted ? (
                <>
                  <div className="promise-symbol">✦</div>

                  <p className="promise-label">
                    ONE LITTLE PROMISE
                  </p>

                  <h3>
                    Before you go...
                  </h3>

                  <div className="promise-line" />

                  <p className="promise-text">
                    Life changes.
                    <br />
                    People grow.
                    <br />
                    We may enter completely different
                    chapters someday...
                  </p>

                  <p className="promise-highlight">
                    But wherever life takes us,
                    <br />
                    please don't let this bond
                    <br />
                    become a forgotten chapter.
                  </p>

                  <p className="promise-text promise-soft">
                    Stay.
                    <br />
                    Keep annoying me.
                    <br />
                    Keep being my safe place.
                    <br />
                    Keep being you. ♡
                  </p>

                  <p className="promise-question">
                    Will you promise me?
                  </p>

                  <motion.button
                    className="promise-yes"
                    onClick={acceptPromise}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    YES, I PROMISE
                    <span>♡</span>
                  </motion.button>
                </>
              ) : (
                <motion.div
                  className="promise-accepted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="accepted-heart"
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 10,
                    }}
                  >
                    ♡
                  </motion.div>

                  <p className="promise-label">
                    PROMISE ACCEPTED
                  </p>

                  <h3>
                    Then it's settled.
                  </h3>

                  <div className="promise-line" />

                  <p className="accepted-text">
                    No matter how many years pass,
                    <br />
                    no matter how much life changes,
                    <br />
                    this little bond stays ours.
                  </p>

                  <p className="accepted-final">
                    Some promises don't need
                    <br />
                    to be spoken twice. ♡
                  </p>

                  <div className="accepted-sign">
                    — Your Rakshasi
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!showPromise && (
      <motion.button
  className="rewind-btn"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  whileHover={{
    scale: 1.08,
    rotate: -20,
  }}
  whileTap={{
    scale: 0.92,
  }}
  aria-label="Restart story"
  title="Back to beginning"
>
  ↻
</motion.button>
    )}
      
    </section>
    
  );
}