import { useState } from "react";
import { useRecoilValue } from "recoil";
import { notesState } from "../../data/atoms";
import styles from './NoteListContainer.module.css';
import Modal from "../modal/Modal";
import ListNote from "../listNote/ListNote";
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

//This component renders out a list of notes
const NoteListContainer = () => {
  const noteList = useRecoilValue(notesState);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Button variant="contained" onClick={() => setShowModal(true)} className={styles.Button} endIcon={<AddCircleOutlineIcon />}>New</Button>
        {noteList.map((note, key) => <ListNote note={note} key={key}/>)}
        {showModal && <Modal setShowModal={setShowModal}/>}
      </div>
    </>
  )
}

export default NoteListContainer;