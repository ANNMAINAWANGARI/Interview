import React from "react";
import axios from "axios";
import UpdateTodo from "./UpdateTodo";
const Todo = ({ heading, messagecontext, id,category,createdAt,updatedAt }) => {
  const [show, setShow] = React.useState(false);

  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/todo/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  const edit = async () => {
    setShow(!show);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "70vw",
        justifyContent: "space-between",
        border:'1px solid black',
        margin:2,
        padding:2
      }}
    >
      {show && (
        <UpdateTodo
          title={heading}
          message={messagecontext}
          category={category}
          identity={id}
        />
      )}
      <div style={{ margin: 15 }}>
        <h2 style={{ margin: 0, color: "green", textAlign: "left" }}>
          {heading}
        </h2>
        <h4 style={{ margin: 0, textAlign: "left" }}>{messagecontext}</h4>
        {/*<h5 style={{ margin: 0, textAlign: "left" ,color:'red'}}>{category}</h5>*/}
        <h6 style={{ margin: 0, textAlign: "left" ,color:'black'}}>CreatedAt :{createdAt}</h6>
        <h6 style={{ margin: 0, textAlign: "left" ,color:'black'}}>UpdatedAt :{updatedAt}</h6>
      </div>
      <div style={{ marginLeft: "55px" }}>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            marginRight: "10px",
            padding: 10,
            //borderRadius: "38px",
            cursor: "pointer",
          }}
          onClick={edit}
        >
          Edit
        </button>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: 10,
            //borderRadius: "33px",
            cursor: "pointer",
          }}
          onClick={deleteTodo}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
