import React from "react";
import "./App.css";
import deleteLogo from './delete.svg';

export default function ListItem({ item, updateTodoStatus, deleteTodo }) {


    return (
        <div className=" item-component d-flex flex-row justify-content-between ">
            <div className="d-flex flex-row align-items-center">
                <input type="checkbox" defaultChecked={item.status} onChange={() => { updateTodoStatus(item.id) }}></input>
                <p className={`item-text ${item.status ? "text-strike" : ""}`}>{item.text}</p>
            </div>
            <div>
                <img src={deleteLogo} alt="delete" onClick={() => deleteTodo(item.id)} ></img>
            </div>
        </div>
    )
}