import React from 'react';

type Props = {
    name: string,
    desc: string,
    onDeleteClick: () => void;
}
const ToDoListElement = ({ name, desc, onDeleteClick }: Props) => {

    return (
        <div>
            <div style={{ display: 'flex', gap:'1em'} }>
                {name}
            </div>
            <div>
                {desc}
            </div>
            <div>
                <button onClick={() => onDeleteClick()}>Delete</button>
            </div>
        </div>)
}

//const ToDoListElement = () => {

//    return (
//        <div>
//            123
//        </div>
//        )
//}
export default ToDoListElement;