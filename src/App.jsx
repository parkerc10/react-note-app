import { useState, useEffect } from 'react'
import styles from './App.module.css';
import NoteListContainer from './compponents/noteListContainer/NoteListContainer';
import NoteContainer from './compponents/noteContainer/NoteContainer';
import { useRecoilValue } from "recoil";
import { displayNoteState } from './data/atoms';

function App() {
  const displayedNote = useRecoilValue(displayNoteState);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  //Handling screen resizing
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className={styles.App}>
      {(width > breakpoint || (width < breakpoint && Object.keys(displayedNote).length === 0)) && <NoteListContainer />}
      {Object.keys(displayedNote).length > 0 && <NoteContainer/>}
    </div>
  )
}

export default App
