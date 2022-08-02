
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import ListItem from './ListItem';
import { actionCreators } from "./state/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';

function App() {

  const { todoList } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { addNewTodo, updateTodoStatus, deleteTodo } = bindActionCreators(actionCreators, dispatch)

  const [textBuffer, setTextBuffer] = useState("");


  //setList



  return (
    <div className='todo-container'>
      <div className='d-flex flex-row justify-content-between w-100 mb-5'>
        <h1 className="text-left bold-header">To-do</h1>
        <button className='add-button' onClick={() => {
          addNewTodo(textBuffer)
          setTextBuffer("");

        }}>Add</button>
      </div>
      <div className='d-flex flex-row justify-content-between w-100 '>

        <textarea rows="4" className=" custom-textarea" value={textBuffer} placeholder="Please enter..." onChange={(e) => { setTextBuffer(e.target.value) }} ></textarea>

      </div>
      <div className='my-2'>
        {
          todoList?.map((i) => {
            return <ListItem key={i.id} item={i} updateTodoStatus={updateTodoStatus} deleteTodo={deleteTodo} ></ListItem>
          })
        }
      </div>

    </div>
  );
}

export default App;
