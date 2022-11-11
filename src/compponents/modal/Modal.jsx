import { useState } from 'react';
import { useRecoilValue, useRecoilState } from "recoil";
import { notesState } from "../../data/atoms";
import styles from './Modal.module.css';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

//This component displays a modal to add a note
const Modal = ({setShowModal}) => {
  const [noteList, setNoteList] = useRecoilState(notesState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() === 12 ? 1 : date.getMonth() + 1;
    let year = date.getFullYear();

    setNoteList([...noteList, {  
      "title": title !== '' ? title : 'Untitled',
      "dateCreated": `${month}-${day}-${year}`,
      "content": content
    }]);
    setShowModal(false);
  }

  const closeModal = () => {
    setTitle('');
    setContent('');
    setShowModal(false);
  }


  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <CloseIcon sx={{ cursor: "pointer", top:0, position: 'absolute', right:0, }} onClick={closeModal}/>
          <TextField 
            id='outlined-basic' 
            label='Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            fullWidth
          />
          <br />
          <TextField
            id="outlined-textarea"
            label="Insert Your Note Here"
            value={content}
            onChange={e => setContent(e.target.value)}
            multiline
            minRows={15}
            fullWidth
          />
          <br />
          <Button variant='contained' onClick={addNote}>Add Note</Button>
        </div>
      </div>
    </>
  )
}

export default Modal;