import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { turnPageTo } from "../../../utils/storyNavigation";
import "./ChapterOne.css";

export default function ChapterOne() {

  const nextChapter = () => {
    turnPageTo("chapter2");
  };

  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [typedParagraphs, setTypedParagraphs] = useState({});

  const paragraphs = [
    "Some stories don't begin with a big moment.",

    `They quietly become a part of life...
before we even realize it.`,

    `Somewhere between family gatherings,
little conversations, and familiar smiles...`,

    "a beautiful bond slowly found its place.",

    "And that was only the beginning.",
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

    <section id="chapter1" className="chapter-one">

      {/* Decorative Leaf */}
      <motion.div
        className="chapter-leaf"
        initial={{ opacity:0, scale:.5 }}
        whileInView={{ opacity:1, scale:1 }}
        transition={{duration:1}}
        viewport={{once:true}}
      >
        🌿
      </motion.div>


      <motion.p
        className="chapter-number"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        onAnimationComplete={() => setActiveParagraph(0)}
      >
        CHAPTER I
      </motion.p>


      <motion.h2
        className="chapter-title"
        initial={{
          opacity:0,
          y:40
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:.8
        }}
        viewport={{once:true}}
      >

        Where It All Began

      </motion.h2>


      <motion.div
        className="chapter-divider"
        initial={{scaleX:0}}
        whileInView={{scaleX:1}}
        transition={{duration:1}}
        viewport={{once:true}}
      >
        ✦ ───────── ✦
      </motion.div>


      <motion.div
        className="chapter-story"

        initial={{
          opacity:0
        }}

        whileInView={{
          opacity:1
        }}

        transition={{
          delay:.4,
          duration:1
        }}

        viewport={{once:true}}
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


        <p className="special-line">
          {typedParagraphs[4] || ""}
          {activeParagraph === 4 && (
            <span className="typing-cursor">|</span>
          )}
        </p>

      </motion.div>

{activeParagraph >= paragraphs.length && (
  <motion.button
    className="chapter-btn"
    onClick={nextChapter}

    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}

    transition={{
      duration: 0.8,
      ease: "easeOut"
    }}

    whileHover={{
      scale:1.05
    }}

    whileTap={{
      scale:.95
    }}
  >

    Turn Page

    <FaArrowDown/>

  </motion.button>
)}


    </section>
  );
}