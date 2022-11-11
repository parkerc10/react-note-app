import { useRecoilState } from "recoil";
import { displayNoteState, notesState } from "../../data/atoms";
import styles from './ListNote.module.css';
import { Card, CardContent, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//This component displays a note in a list
const ListNote = ({note}) => {
  const [displayNote, setDisplayNote] = useRecoilState(displayNoteState);
  const [noteList, setNoteList] = useRecoilState(notesState);

  const showNote = () => {
    setDisplayNote(note);
  }

  const deleteNote = (e) => {
    e.stopPropagation();
    let newListArr = noteList.filter(listNote => listNote.title !== note.title && listNote.content !== note.content);
    setNoteList(newListArr);
    setDisplayNote({});
  }

  return (
    <>
      <Card className={styles.Card} onClick={showNote}>
        <CardContent className={styles.CardContent}>
          <div>
            <p>{note.dateCreated}</p>
            <h2>{note.title}</h2>
          </div>
          {Object.keys(displayNote).length === 0 && <Button variant="contained" color='error' className={styles.deleteButton} onClick={(e) => deleteNote(e)} endIcon={<DeleteIcon />} ></Button>}
        </CardContent>
      </Card>
    </>
  )
}

export default ListNote;