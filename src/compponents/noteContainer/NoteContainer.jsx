import DisplayedNote from "../displayedNote/DisplayedNote";
import styles from './NoteContainer.module.css';

//This component wraps around the displayed note
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