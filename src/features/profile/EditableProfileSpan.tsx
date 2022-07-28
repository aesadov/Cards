import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    name: string,
    callback: (name: string) => void,
}

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {
    console.log('EditableSpan')

    const [name, setName] = useState(props.name)
    let [editMode, setEditMode] = useState(false)


    const activateEditMode = () => {
        setEditMode(true)
    }

    const activateViewMode = () => {
        setEditMode(false)
        name && props.callback(name)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    return (
        <>
            {editMode ? <input value={name} onChange={onChangeTitleHandler} onBlur={activateViewMode} autoFocus/>
                : <span onDoubleClick={activateEditMode}>{name || "not name"}</span>}
        </>
    )
})