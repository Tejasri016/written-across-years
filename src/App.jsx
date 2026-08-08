import Hero from "./sections/Hero/Hero";
import Prologue from "./sections/Prologue/Prologue";

import ChapterOne from "./sections/Chapters/ChapterOne/ChapterOne";
import ChapterTwo from "./sections/Chapters/ChapterTwo/ChapterTwo";
import ChapterThree from "./sections/Chapters/ChapterThree/ChapterThree";
import ChapterFour from "./sections/Chapters/ChapterFour/ChapterFour";
import ChapterFive from "./sections/Chapters/ChapterFive/ChapterFive";

import Letter from "./sections/Letter/Letter";
import Ending from "./sections/Ending/Ending";

import DecorativeFrame from "./components/DecorativeFrame/DecorativeFrame";
import FloatingDust from "./components/FloatingDust/FloatingDust";
import PageTurn from "./components/PageTurn/PageTurn";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import CursorGlow from "./components/CursorGlow/CursorGlow";

import "./styles/App.css";

export default function App() {
  return (
    <main className="story">

      <DecorativeFrame />
      <FloatingDust />
      <PageTurn />
      <MusicPlayer />
      <CursorGlow />

      <Hero />

      <Prologue />

      <ChapterOne />

      <ChapterTwo />

      <ChapterThree />

      <ChapterFour />

      <ChapterFive />

      <Letter />

      <Ending />
      
    </main>
    
  );
}