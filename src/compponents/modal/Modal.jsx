import { useState } from 'react';
import { useRecoilValue, useRecoilState } from "recoil";
import { notesState } from "../../data/atoms";
import styles from './Modal.module.css';
import { Button, TextField, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({setShowModal}) => {
  const [noteList, setNoteList] = useRecoilState(notesState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = () => {
    if (title !== "" && content !== "") {
      setNoteList([...noteList, {  
        "title": title,
        "dateCreated": "2022-11-08",
        "content": content
      }]);
      setShowModal(false);

    }
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
          {/* <p className={styles.modalText}>Title</p> */}
          <CloseIcon sx={{ cursor: "pointer", marginRight: 0, marginLeft: 'auto', marginBottom: '5px' }} onClick={closeModal}/>
          <TextField 
            id='outlined-basic' 
            label='Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            fullWidth
          />
          <br />
          {/* <input className={styles.modalTitle} value={title} onChange={e => setTitle(e.target.value)}/>
          <p className={styles.modalText}>Content</p> */}
          {/* <textarea rows={20} cols={100} className={styles.modalBody} value={content} onChange={e => setContent(e.target.value)}></textarea> */}
          <TextField
            id="outlined-textarea"
            label="Insert Your Note Here"
            placeholder="Placeholder"
            value={content}
            onChange={e => setContent(e.target.value)}
            multiline
            minRows={15}
            fullWidth
          />
          <br />
          {/* <button className={styles.modalButton} onClick={addNote}>Ok</button> */}
          <Button variant='contained' onClick={addNote}>Add Note</Button>
        </div>
      </div>
    </>
  )
}

export default Modal;