import { useRecoilState } from "recoil";
import { displayNoteState } from "../../data/atoms";
import styles from './ListNote.module.css';
import { Card, CardContent } from '@mui/material';

const ListNote = ({note}) => {
  const [displayNote, setDisplayNote] = useRecoilState(displayNoteState);

  const showNote = () => {
    setDisplayNote(note);
  }

  return (
    <>
    {/* <div className={styles.container}>
      <h2>{note.title}</h2>
      <p>{note.dateCreated}</p>
    </div> */}
    <Card className={styles.Card} onClick={showNote}>
      <CardContent>
        <p>{note.dateCreated}</p>
        <h2>{note.title}</h2>
      </CardContent>
    </Card>
    </>
  )
}

export default ListNote;