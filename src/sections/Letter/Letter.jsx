import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { turnPageTo } from "../../utils/storyNavigation";
import "./Letter.css";

export default function Letter() {
  const goToEnding = () => {
    turnPageTo("ending");
  };

  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [typedParagraphs, setTypedParagraphs] = useState({});

  const paragraphs = [
    "Dear Bava,",

    `I don't think I say this enough, mainly because we already
talk about so many things normally. So saying something like
this directly can sometimes feel a little awkward.`,

    `But I wanted to make something for you that wasn't just
another message that disappears into a chat.`,

    `You have become a genuinely important person in my life.
And it's not because of one huge thing you did.`,

    `It's all the little things.`,

    `The way you support.
The way you care.
The way you make things feel easier without even trying.`,

    `There are people we meet in life,
and then there are people who slowly become
part of the way we experience life.`,

    `You're one of those people for me.`,

    `And honestly, I'm really glad that our bond became what it is
today.`,

    `I may not always say it properly,
but I notice the things you do.
I appreciate them.
And I hope you know that your place in my life is
something I genuinely value.`,

    `This little website is my first gift to you.
Maybe it's not something you can unwrap,
but I wanted it to be something you could come back to
whenever you feel like remembering this time.`,

    `Some bonds are simply worth celebrating.`,

    `— With lots of love,
    
Your Mardal ♡`,
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
        }, 250);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [activeParagraph]);

  return (
    <section className="letter" id="letter">
      <video
      className="letter-bg-video"
      src="https://res.cloudinary.com/dnvi0vxwa/video/upload/v1786186030/hearts_cxj9nf.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
      {/* Small top symbol */}
      <motion.div
        className="letter-top-mark"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ✦
      </motion.div>

      <div className="letter-paper">

        <motion.p
          className="letter-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onAnimationComplete={() => setActiveParagraph(0)}
        >
          A LETTER I WANTED YOU TO KEEP
        </motion.p>

        <motion.h2
          className="letter-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          For You,
        </motion.h2>

        <motion.div
          className="letter-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
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

          <p>
            {typedParagraphs[5] || ""}
            {activeParagraph === 5 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[6] || ""}
            {activeParagraph === 6 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p className="letter-highlight">
            {typedParagraphs[7] || ""}
            {activeParagraph === 7 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[8] || ""}
            {activeParagraph === 8 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[9] || ""}
            {activeParagraph === 9 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p>
            {typedParagraphs[10] || ""}
            {activeParagraph === 10 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p className="letter-final-line">
            {typedParagraphs[11] || ""}
            {activeParagraph === 11 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

          <p className="letter-sign">
            {typedParagraphs[12] || ""}
            {activeParagraph === 12 && (
              <span className="typing-cursor">|</span>
            )}
          </p>

        </motion.div>
      </div>

      <motion.button
        className="letter-btn"
        onClick={goToEnding}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        There's One More Thing
        <FaArrowDown />
      </motion.button>

    </section>
  );
}