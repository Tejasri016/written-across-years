import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { turnPageTo } from "../../../utils/storyNavigation";
import "./ChapterFour.css";

export default function ChapterFour() {
  const nextChapter = () => {
    turnPageTo("chapter5");
  };

  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [typedParagraphs, setTypedParagraphs] = useState({});

  const paragraphs = [
    `And then, somehow...
life brought the conversations back.`,

    `Not with some dramatic moment.
Not with a perfectly written beginning.`,

    `Just naturally.`,

    `A message here.
A conversation there.
A little more laughter than before.`,

    `And slowly, the distance that once felt so big
started feeling smaller.`,

    `Funny how some bonds don't really disappear.
They just wait for the right time to become
closer again.`,
  ];

  useEffect(() => {
    if (
      activeParagraph < 0 ||
      activeParagraph >= paragraphs.length
    ) {
      return;
    }

    const text = paragraphs[activeParagraph];
    let index = 0;

    const timer = setInterval(() => {
      setTypedParagraphs((prev) => ({
        ...prev,
        [activeParagraph]: text.slice(0, index + 1),
      }));

      index++;

      if (index >= text.length) {
        clearInterval(timer);

        setTimeout(() => {
          setActiveParagraph((prev) => prev + 1);
        }, 350);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [activeParagraph]);

  return (

    <section id="chapter4" className="chapter-four">

      <div className="chapter-four-glow" />

      {/* Additional cinematic stars */}

<motion.div
  className="chapter-four-star star-three"
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 0.4, scale: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
  viewport={{ once: true }}
>
  ✧
</motion.div>

<motion.div
  className="chapter-four-star star-four"
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 0.55, scale: 1 }}
  transition={{ delay: 0.8, duration: 1 }}
  viewport={{ once: true }}
>
  ✦
</motion.div>

<motion.div
  className="chapter-four-star star-five"
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 0.3, scale: 1 }}
  transition={{ delay: 1, duration: 1 }}
  viewport={{ once: true }}
>
  ·
</motion.div>

<motion.div
  className="chapter-four-star star-six"
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 0.45, scale: 1 }}
  transition={{ delay: 1.2, duration: 1 }}
  viewport={{ once: true }}
>
  ✧
</motion.div>

{/* Additional ambient glows */}

<div className="chapter-four-glow glow-two" />
<div className="chapter-four-glow glow-three" />

      <div className="chapter-four-content">

        <motion.p
          className="chapter-four-number"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onAnimationComplete={() => setActiveParagraph(0)}
        >
          CHAPTER IV
        </motion.p>

        <motion.h2
          className="chapter-four-title"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Finding Our Way Back
        </motion.h2>

        <motion.div
          className="chapter-four-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          viewport={{ once: true }}
        >
          ✦ ───────── ✦
        </motion.div>

        <motion.div
          className="chapter-four-story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 1.1 }}
          viewport={{ once: true }}
        >

          <p>
            {typedParagraphs[0] || ""}
            {activeParagraph === 0 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[1] || ""}
            {activeParagraph === 1 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[2] || ""}
            {activeParagraph === 2 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[3] || ""}
            {activeParagraph === 3 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[4] || ""}
            {activeParagraph === 4 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p className="chapter-four-highlight">
            {typedParagraphs[5] || ""}
            {activeParagraph === 5 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

        </motion.div>

        {activeParagraph >= paragraphs.length && (
          <motion.button
            className="chapter-four-btn"
            onClick={nextChapter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Continue the Story
            <FaArrowRight />
          </motion.button>
        )}

      </div>
    </section>
  );
}