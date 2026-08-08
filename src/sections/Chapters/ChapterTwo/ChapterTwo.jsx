import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { turnPageTo } from "../../../utils/storyNavigation";
import "./ChapterTwo.css";

export default function ChapterTwo() {
  const nextChapter = () => {
    turnPageTo("chapter3");
  };

  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [typedParagraphs, setTypedParagraphs] = useState({});

  const paragraphs = [
    `It wasn't one particular conversation
that made the bond special.`,

    `It was all the little ones.`,

    `Random talks.
Small jokes.
Familiar teasing.
Those completely ordinary moments
that somehow became memorable.`,

    `Nothing about them looked important
while they were happening.`,

    `But looking back...
maybe that's where the comfort began.`,
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
        }, 300);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [activeParagraph]);

  return (

    <section id="chapter2" className="chapter-two">

      <motion.div
        className="chapter-two-bird bird-one"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        ◇
      </motion.div>

      <motion.div
        className="chapter-two-bird bird-two"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        viewport={{ once: true }}
      >
        ◇
      </motion.div>

      <div className="chapter-two-content">

        <motion.p
          className="chapter-two-number"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onAnimationComplete={() => setActiveParagraph(0)}
        >
          CHAPTER II
        </motion.p>

        <motion.h2
          className="chapter-two-title"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          Little Conversations
        </motion.h2>

        <motion.div
          className="chapter-two-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          ✦ ───────── ✦
        </motion.div>

        <motion.div
          className="chapter-two-story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.1 }}
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

          <p className="chapter-two-highlight">
            {typedParagraphs[4] || ""}
            {activeParagraph === 4 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

        </motion.div>

        {activeParagraph >= paragraphs.length && (
          <motion.button
            className="chapter-two-btn"
            onClick={nextChapter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Turn Page
            <FaArrowRight />
          </motion.button>
        )}

      </div>
    </section>
  );
}