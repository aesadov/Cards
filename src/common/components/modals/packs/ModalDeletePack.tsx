import React from 'react';
import IconButton from "@mui/material/IconButton/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {InputModal} from "../InputModal";
import {CheckboxComponent} from "../../../UniversalComponents/CheckboxComponent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {WrapperModal} from "../WrapperModal";
import {Delete} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {removePack} from "../../../../features/packs/packs-reducer";

type ModalType = {
    value: boolean
    callback:()=>void
}

export const ModalDeletePack = ({value, callback}: ModalType) => {
    const initial = !value ? false : value

    const dispatch = useAppDispatch()
    const id = useAppSelector((state) => state.packs.packId)
    const cardPacks = useAppSelector((state) => state.packs.cardPacks)

    const pack = cardPacks.find(c => c._id === id)

    const removePackHandler = () => {
      dispatch(removePack(id))
    }

    return (
        <WrapperModal isOpen={initial}>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Delete Pack</h2>
                <IconButton onClick={()=>callback()}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <h3>Do you want to remove {pack && pack.name}</h3>
            <h3>All cards will be deleted</h3>
            <Stack direction="row" spacing={2}>
                <Button onClick={()=>callback()} variant="outlined">
                    Cancel
                </Button>
                <Button   onClick={removePackHandler} variant="contained" endIcon={<Delete/>}>
                    Delete
                </Button>
            </Stack>
        </WrapperModal>
    );
};