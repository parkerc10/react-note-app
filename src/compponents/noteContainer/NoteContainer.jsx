import { useRecoilState } from "recoil";
import { displayNoteState } from "../../data/atoms";
import DisplayedNote from "../displayedNote/DisplayedNote";
import styles from './NoteContainer.module.css';
import { Card, CardContent } from "@mui/material";

const NoteContainer = () => {

  return (
    <>
      <div className={styles.container}>
        <DisplayedNote />
      </div>
    </>
  )
}

export default NoteContainer;