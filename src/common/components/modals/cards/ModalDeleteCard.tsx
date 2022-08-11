import React, {useState} from 'react';
import {WrapperModal} from "../WrapperModal";
import IconButton from "@mui/material/IconButton/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {Delete} from "@mui/icons-material";
import {useAppDispatch} from "../../../hooks/hooks";
import {removeCard} from "../../../../features/cards/cards-reducer";


type ModalType = {
    isOpen: boolean,
    id: string,
    callback: () => void
}


export const ModalDeleteCard = ({isOpen, id, callback}: ModalType) => {

    // const [openModal, setOpenModal] = useState<boolean>(isOpen)

    const dispatch = useAppDispatch()

    const deleteCardHandler = () => {
        dispatch(removeCard(id))
    }


    return (
        <>

            <WrapperModal isOpen={isOpen}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>Delete Card</h2>
                    <IconButton onClick={() => callback()}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <h3>Do you want to remove {}</h3>
                <h3>All cards will be deleted</h3>
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => callback()} variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={deleteCardHandler} variant="contained" endIcon={<Delete/>}>
                        Delete
                    </Button>
                </Stack>

            </WrapperModal>
        </>
    );
};

