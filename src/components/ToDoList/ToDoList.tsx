import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";
type ListElement={
    name:string,
    desc:string;
}
const ToDoList = () => {
    const [name,setName]= useState('')
    const [desc,setDesc]= useState('')

    const [List,setList]=useState<ListElement[]>([])
    const AddElement = () => {
        const newList = [...List, {
            name: name,
            desc:desc
        }]
        setList(newList)

        setName('')
        setDesc('')

        //setList([{
        //    name:name,
        //    desc:desc
        //}])
    }


    const DeleteElement = (index: number) => {
        const filter = List.filter((el, i) => i != index)

        setList(filter);
    }


    return (
        <div>
            <input type="text" placeholder={"name"}
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input type="text" placeholder={"description"}
                   value={desc}
                   onChange={(e)=>setDesc(e.target.value)}
            />

            <div>
            <button onClick={()=>AddElement()}>add in list</button>
            </div>

            <div>
                {List.map((el, i) => <ToDoListElement
                    name={el.name}
                    desc={el.desc}
                    onDeleteClick={() => DeleteElement(i)}
                   />
                    )}
                </div>
        </div>
    );
};

export default ToDoList;