import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";
import { turnPageTo } from "../../utils/storyNavigation";
import "./Prologue.css";

export default function Prologue() {
  const nextPage = () => {
    turnPageTo("chapter1");
  };

  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [typedParagraphs, setTypedParagraphs] = useState({});

  const paragraphs = useMemo(
    () => [
      "Oyee Bava...",

      "This isn't just another website.",

      "It's something I wanted to make with time, memories, and a lot of care.",

      "Not because I had to...",

      "But because some people deserve something that feels personal.",

      "So instead of giving you just a message...",

      "I thought I'd tell a story.",

      "Our story.",
    ],
    []
  );

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
  }, [activeParagraph, paragraphs]);

  return (
    <section id="prologue" className="prologue">

      {/* Small heading */}
      <motion.p
        className="prologue-tag"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        onAnimationComplete={() => {
          setActiveParagraph(0);
        }}
      >
        BEFORE WE BEGIN
      </motion.p>

      {/* Main title */}
      <motion.h2
        className="prologue-title"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        A Small Note, Before You Turn
        <br />
        The First Page.
      </motion.h2>

      {/* Story */}
      <motion.div
        className="prologue-content"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >

        {/* Paragraph 1 */}
        <p>
          {typedParagraphs[0] || ""}

          {activeParagraph === 0 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

        {/* Paragraph 2 */}
        <p>
          {typedParagraphs[1] || ""}

          {activeParagraph === 1 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

        {/* Paragraph 3 */}
        <p>
          {typedParagraphs[2] || ""}

          {activeParagraph === 2 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

        {/* Paragraph 4 */}
        <p>
          {typedParagraphs[3] || ""}

          {activeParagraph === 3 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

        {/* Paragraph 5 */}
        <p>
          {typedParagraphs[4] || ""}

          {activeParagraph === 4 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

        {/* Paragraph 6 */}
        <p>
          {typedParagraphs[5] || ""}

          {activeParagraph === 5 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

        {/* Highlight */}
        <p className="highlight">
          {typedParagraphs[6] || ""}

          {activeParagraph === 6 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

        {/* Final line */}
        <p>
          {typedParagraphs[7] || ""}

          {activeParagraph === 7 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

      </motion.div>

      {/* Button appears ONLY after all typing is complete */}
      {activeParagraph >= paragraphs.length && (
        <motion.button
          className="prologue-btn"
          onClick={nextPage}
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Turn The First Page

          <FaArrowRight />
        </motion.button>
      )}

    </section>
  );
}