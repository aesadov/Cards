import React, {useState} from 'react';
import {WrapperModal} from "../WrapperModal";
import {InputModal} from "../InputModal";
import IconButton from "@mui/material/IconButton/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import {UniversalButton} from "../../../UniversalComponents/UniversalButton";
import {addNewCard} from "../../../../features/cards/cards-reducer";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";

export const ModalCard = () => {

    const dispatch = useAppDispatch()

    const cardsPack_id = useAppSelector((state) => state.cards.params.cardsPack_id)

    const [addModal, setAddModal] = useState<boolean>(false)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const addCard = () => {
        dispatch(addNewCard({cardsPack_id, question, answer}))
    }
    return (
        <><UniversalButton callback={() => setAddModal(true)} name={'Add new card'}/>
            { addModal && <WrapperModal isOpen={addModal}>
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
                <Button onClick={addCard} variant="contained">
                    Save
                </Button>
            </WrapperModal>
            }
        </>
    );
};
