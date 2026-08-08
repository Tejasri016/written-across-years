import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { turnPageTo } from "../../utils/storyNavigation";
import BookCover from "../../components/BookCover/BookCover";
import "./Hero.css";

export default function Hero() {
 const openStory = () => {
  turnPageTo("prologue");
};

  return (
    <section className="hero">

      {/* Warm Light */}
      <div className="hero-light" />

      {/* Paper Texture */}
      <div className="hero-paper" />

      {/* Gold Ribbon */}
      <div className="hero-ribbon" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >


        {/* Actual Book Cover */}
        <motion.div
          className="hero-book"
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <BookCover />
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          A story that never followed
          <br />
          a straight line.
        </motion.p>

        <motion.button
          className="hero-button"
          onClick={openStory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <FaBookOpen />
          <span>Open Story</span>
        </motion.button>

      </motion.div>

    </section>
  );
}