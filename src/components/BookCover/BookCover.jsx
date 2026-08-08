import { motion } from "framer-motion";
import "./BookCover.css";

export default function BookCover() {
  return (
    <motion.div
      className="book-cover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="book-cover-inner">

        <div className="book-cover-corner corner-tl" />
        <div className="book-cover-corner corner-tr" />
        <div className="book-cover-corner corner-bl" />
        <div className="book-cover-corner corner-br" />

        <div className="book-cover-ornament top-ornament">
          ✦
        </div>

        <div className="book-cover-line" />

        <p className="book-cover-edition">
          A LITTLE STORY
        </p>

        <div className="book-cover-title">
          <span>Written</span>
          <span>Across</span>
          <span>Years</span>
        </div>

        <div className="book-cover-divider">
          <span>✦</span>
        </div>

        <p className="book-cover-subtitle">
          memories, conversations
          <br />
          and a bond worth keeping
        </p>

        <div className="book-cover-bottom">
          <span>VOL. I</span>
          <span>✦</span>
          <span>FOREVER IN THE STORY</span>
        </div>

      </div>
    </motion.div>
  );
}