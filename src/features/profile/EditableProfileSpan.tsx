import React, {ChangeEvent, useState} from "react";
import {useAppSelector} from "../../common/hooks/hooks";

type EditableSpanPropsType = {
    name: string,
    callback: (name: string) => void,

}

export function EditableSpan(props: EditableSpanPropsType) {


    const [name, setName] = useState(props.name)
    let [editMode, setEditMode] = useState(false)



    const activateEditMode = () => {
        setEditMode(true)
        setName(props.name)
    }

    const activateViewMode = () => {
        setEditMode(false)
        name && props.callback(name)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    return editMode ? <input value={name} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{name}</span>
// : <span onDoubleClick={activateEditMode}>{!name ? "Opps" : name}</span>
}