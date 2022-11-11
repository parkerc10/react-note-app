import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { displayNoteState, notesState } from "../../data/atoms";
import styles from './DisplayedNote.module.css';
import { Card, CardContent, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

//This component displays a selected note from the list to perform CRUD operations
const DisplayedNote = () => {
  const [displayNote, setDisplayNote] = useRecoilState(displayNoteState);
  const [noteList, setNoteList] = useRecoilState(notesState);
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(displayNote.title);
  const [content, setContent] = useState(displayNote.content);

  useEffect(() => {
    setTitle(displayNote.title);
    setContent(displayNote.content)
    setIsEditable(false);
  }, [displayNote])

  const saveNote = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() === 12 ? 1 : date.getMonth() + 1;
    let year = date.getFullYear();

    let newListArr = noteList.map(note => {
      if (note.title === displayNote.title && note.content === displayNote.content) {
        return {dateCreated: `${month}-${day}-${year}`,title: title, content: content}
      }
      return note;
    });
    setNoteList(newListArr);
    setDisplayNote({...displayNote, title: title, content: content})
    setIsEditable(false)
  }

  const deleteNote = () => {
    let newListArr = noteList.filter(note => note.title !== displayNote.title && note.content !== displayNote.content);
    setNoteList(newListArr);
    setDisplayNote({});
  }

  const stopEditing = () => {
    setTitle(displayNote.title);
    setContent(displayNote.content);
    setIsEditable(!isEditable)
  }

  const closeNote = () => {
    setDisplayNote({});
  }

  return (
    <>
      <Card className={styles.Card}>
        <div className={styles.iconContainer}>
          <Button variant="contained" color='error' endIcon={<DeleteIcon />} onClick={deleteNote}>Delete</Button>
          <div className={styles.rightIcons}>
            {!isEditable && <Button variant="contained" endIcon={<EditIcon />} onClick={() => setIsEditable(!isEditable)}>Edit</Button>}
            {isEditable && <Button variant="contained" color="success" endIcon={<CheckIcon />} onClick={saveNote}>Save</Button>}
            {isEditable && <Button variant="contained" endIcon={<DoNotDisturbIcon />} onClick={stopEditing}>Cancel</Button>}
            <Button variant="outlined" className={styles.closeButton} endIcon={<CloseIcon />} onClick={closeNote}></Button>
          </div>
        </div>
        <CardContent className={styles.CardContent}>
          <TextField 
            id='outlined-basic' 
            label='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            InputProps={{
              readOnly: !isEditable,
            }}
            className={!isEditable ? styles.greyed : ''}
          />
          <br />
          <TextField
            id="outlined-textarea"
            label="Insert Your Note Here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            minRows={20}
            style={{ minWidth: '50vw' }}
            InputProps={{
              readOnly: !isEditable,
            }}
            className={!isEditable ? styles.greyed : ''}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default DisplayedNote;