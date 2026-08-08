import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { turnPageTo } from "../../../utils/storyNavigation";
import "./ChapterThree.css";

export default function ChapterThree() {
  const nextChapter = () => {
    turnPageTo("chapter4");
  };

  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [typedParagraphs, setTypedParagraphs] = useState({});

  const paragraphs = [
    "And then...",

    "Five years.",

    "Life moved forward.",

    `People changed.
Days became months.
Months became years.`,

    "We weren't talking the way we once did.",

    `But strangely,
some people don't become less familiar
just because life gets quiet.`,

    `The conversations stopped.
The connection didn't.`,
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

    <section id="chapter3" className="chapter-three">

     {/* Decorative floating leaves */}

<motion.div
  className="chapter-three-leaf leaf-two"
  initial={{ opacity: 0, x: -30, rotate: -35 }}
  whileInView={{ opacity: 0.35, x: 0, rotate: -10 }}
  transition={{ delay: 0.3, duration: 1.4 }}
  viewport={{ once: true }}
>
  🍂
</motion.div>

<motion.div
  className="chapter-three-leaf leaf-three"
  initial={{ opacity: 0, x: 30, rotate: 30 }}
  whileInView={{ opacity: 0.3, x: 0, rotate: 15 }}
  transition={{ delay: 0.6, duration: 1.5 }}
  viewport={{ once: true }}
>
  🍂
</motion.div>

<motion.div
  className="chapter-three-leaf leaf-four"
  initial={{ opacity: 0, y: -20, rotate: -15 }}
  whileInView={{ opacity: 0.25, y: 0, rotate: 20 }}
  transition={{ delay: 0.9, duration: 1.6 }}
  viewport={{ once: true }}
>
  🍂
</motion.div>

      <div className="chapter-three-content">

        <motion.p
          className="chapter-three-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onAnimationComplete={() => setActiveParagraph(0)}
        >
          CHAPTER III
        </motion.p>

        <motion.h2
          className="chapter-three-title"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          The Quiet
          <br />
          Years
        </motion.h2>

        <motion.div
          className="chapter-three-line"
          initial={{ width: 0 }}
          whileInView={{ width: "90px" }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="chapter-three-story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.4 }}
          viewport={{ once: true }}
        >

          <p className="quiet-line">
            {typedParagraphs[0] || ""}
            {activeParagraph === 0 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p className="big-silence">
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

          <p>
            {typedParagraphs[5] || ""}
            {activeParagraph === 5 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p className="chapter-three-highlight">
            {typedParagraphs[6] || ""}
            {activeParagraph === 6 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

        </motion.div>

        {activeParagraph >= paragraphs.length && (
          <motion.button
            className="chapter-three-btn"
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
            Continue
            <FaArrowRight />
          </motion.button>
        )}

      </div>
    </section>
  );
}