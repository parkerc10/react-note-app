import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { notesState } from "../../data/atoms";
import styles from './NoteListContainer.module.css';
import Modal from "../modal/Modal";
import ListNote from "../listNote/ListNote";
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const NoteListContainer = () => {
  const [noteList, setNoteList] = useRecoilState(notesState);
  const [showModal, setShowModal] = useState(false);

  const addNote = () => {
    // setNoteList([...noteList, {  
    //   "title": "Note 2",
    //   "dateCreated": "2022-11-08",
    //   "content": "my second note"
    // }])
    setShowModal(true);
  }

  return (
    <>
      <div className={styles.container}>
        <Button variant="contained" onClick={addNote} className={styles.Button} endIcon={<AddCircleOutlineIcon />}>New</Button>
        {noteList.map((note, key) => <ListNote note={note} key={key}/>)}
        {showModal && <Modal setShowModal={setShowModal}/>}
      </div>
    </>
  )
}

export default NoteListContainer;