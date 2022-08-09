import React, {useState} from 'react';
import IconButton from "@mui/material/IconButton/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {InputModal} from "../InputModal";
import Button from "@mui/material/Button";
import {WrapperModal} from "../WrapperModal";
import {useAppDispatch} from "../../../hooks/hooks";
import {changeCard} from "../../../../features/cards/cards-reducer";

type ModalType = {
    modalUpdate: boolean
    id: string
}


export const ModalEditCard = ({modalUpdate, id}: ModalType) => {

    const [addModal, setAddModal] = useState<boolean>(modalUpdate)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const dispatch = useAppDispatch()

    const editeCard = () => {
      dispatch(changeCard({_id: id, question, answer}))
    }

    return (
        <WrapperModal isOpen={addModal}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Add new card</h2>
                <IconButton onClick={() =>setAddModal(false)}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <InputModal text={question} label={'Question'} callback={(value) => setQuestion(value)}/>
            <InputModal text={answer} label={'Answer'} callback={(value) => setAnswer(value)}/>
            <Button onClick={() =>setAddModal(false)} variant="outlined">
                Cancel
            </Button>
            <Button onClick={editeCard} variant="contained">
                Save
            </Button>
        </WrapperModal>
    );
};
