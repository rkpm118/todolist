
import React, { useState } from 'react';
import "../App.css"
import { GrAdd } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function TodoList() {
  const [data, setData] = useState('');
  const [titleData,setTitleData] = useState('');
  const [item, setItem] = useState([]);
  const [edit, setEdit] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [dalete,setdelete]=useState("");
  const [update,setupdate]=useState("")

  const newTask = {
    name: data,
    title:titleData
  };

  const handleAdd = () => {
    if (!newTask.name || !newTask.title) return;
    else if (newTask.name && !toggle) {
      setItem([...item].map((e,index)=>index==[edit] ? {name: newTask.name, title: newTask.title}:e))
      setEdit(null);
      setToggle(true);
      setData("")
      setTitleData("")
    } else {
      const sortedItems = [...item, newTask];
      setItem(sortedItems);
      setData('');
      setTitleData('');
    }
  };

  const handleDelete = (id) => {
    const updatedItems = item.filter((_, index) => id !== index);
    setItem(updatedItems); 
    setdelete("Delete"); 
  };

  const handleEdit = (id) => {
    const editedItem = item.find((_, index) => id === index);
    setData(editedItem.name);
    setTitleData(editedItem.title);
    setToggle(false);
    setEdit(id);
    setupdate("Edit")
  };

  return (

    <div className='App'>
    <div>{dalete}</div>
    <div>{update}</div>
    <div className='title'>
    
      <h3>GYIZER</h3>
      <p>TODO APP</p>
    </div>
    
     <div className='container'>
      <div className='inputList'>
      <input type="text" placeholder='Enter Title' value={titleData} onChange={(e) => setTitleData(e.target.value)} />
      <input type="text" placeholder='Enter Name' value={data} onChange={(e) => setData(e.target.value)} />
      </div>

      <div className='addList'>
      {
        toggle ? <button onClick={handleAdd}><GrAdd /></button> : <button onClick={handleAdd}><CiEdit /></button>
      }
      </div>
     </div>
      
        <div className='container1'>
            
      {item.map((e, index) => (
        <div key={index} className='item'>
          <div>
            <div className='t'>{e.title}</div>
            <div className='n'>{e.name}</div>
          </div>

          <div>
          <button className='edit' onClick={() => handleEdit(index)}><CiEdit /></button>
          <button className='delete' onClick={() => handleDelete(index)}><MdDeleteForever /></button>
          </div> 
          </div>
      ))}
      </div>
      
    </div>
  );
}

export default TodoList;























