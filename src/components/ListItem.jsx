import React from "react";

export default function ListItem(props) {
  
  return (
    <li key={props.id}>
      <input
        type="checkbox"
        checked={props.item.checked}
        onChange={() => {
          props.handleCheck(props.id);
        }}
      />
      <label> {props.item.item} </label>
      <button
        onClick={() => {
            props.handleDelete(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
