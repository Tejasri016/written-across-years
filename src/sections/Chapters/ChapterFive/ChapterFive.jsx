import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { turnPageTo } from "../../../utils/storyNavigation";
import "./ChapterFive.css";

export default function ChapterFive() {
  const nextPage = () => {
    turnPageTo("letter");
  };

  const paragraphs = [
    `Somewhere along the way,
you stopped feeling like just another person in the family.`,

    `You became someone I could talk to without
thinking twice about what to say.`,

    `Someone whose presence feels easy.
Someone whose support means more than
I probably say out loud.`,

    `And maybe that's what makes certain bonds special.`,

    `You don't have to constantly prove
that you're there for someone.
They just know.`,

    `And I know I've been lucky to have
that kind of bond with you.`,
  ];

  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [typedParagraphs, setTypedParagraphs] = useState({});
  const [showButton, setShowButton] = useState(false);

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
          setActiveParagraph((prev) => {
            const next = prev + 1;

            if (next >= paragraphs.length) {
              setShowButton(true);
            }

            return next;
          });
        }, 500);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [activeParagraph]);

  return (
    <section id="chapter5" className="chapter-five">

      {/* Ambient glow */}
      <div className="chapter-five-glow" />

      {/* Decorative flowers */}
      <motion.div
        className="chapter-five-flower flower-one"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        ✿
      </motion.div>

      <motion.div
        className="chapter-five-flower flower-two"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        viewport={{ once: true }}
      >
        ❋
      </motion.div>

      <div className="chapter-five-content">

        {/* Chapter number */}
        <motion.p
          className="chapter-five-number"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onAnimationComplete={() => {
            setTimeout(() => {
              setActiveParagraph(0);
            }, 700);
          }}
        >
          CHAPTER V
        </motion.p>

        {/* Title */}
        <motion.h2
          className="chapter-five-title"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          A Place
          That Feels Like Home
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="chapter-five-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.8,
          }}
          viewport={{ once: true }}
        >
          ✦ ───────── ✦
        </motion.div>

        {/* Story */}
        <motion.div
          className="chapter-five-story"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 1,
          }}
          viewport={{ once: true }}
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

          {/* Emotional highlight */}
          <p className="chapter-five-highlight">
            {typedParagraphs[4] || ""}

            {activeParagraph === 4 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          {/* Final paragraph */}
          <p>
            {typedParagraphs[5] || ""}

            {activeParagraph === 5 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

        </motion.div>

        {/* Button appears ONLY after typing finishes */}
        {showButton && (
          <motion.button
            className="chapter-five-btn"
            onClick={nextPage}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            One Last Page
            <FaArrowRight />
          </motion.button>
        )}

      </div>
    </section>
  );
}