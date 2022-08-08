import React, {useState} from 'react';
import IconButton from "@mui/material/IconButton/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {InputModal} from "./InputModal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {WrapperModal} from "./WrapperModal";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {updateUserPack} from "../../../features/packs/packs-reducer";

type ModalType = {
    value: boolean
    callback:()=>void
}

export const ModalUpdatePack = ({value, callback}: ModalType) => {
    const initial = !value ? false : value

    const [text, setText] = useState<string>('')

    const dispatch = useAppDispatch()
    const id = useAppSelector((state) => state.packs.packId)

    const updatePack = () => {
        dispatch(updateUserPack({_id: id, name: text}))
    }

    return (
        <WrapperModal isOpen={initial}>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>Add new pack</h2>
                <IconButton onClick={()=>callback()}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <InputModal callback={(text)=>setText(text)} label={'Add new pack'}/>

            <Stack direction="row" spacing={2}>
                <Button onClick={()=>callback()} variant="outlined">
                    Cancel
                </Button>
                <Button  onClick={updatePack} variant="contained">
                    Save
                </Button>
            </Stack>
        </WrapperModal>
    );
};
