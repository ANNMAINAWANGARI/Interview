import React from "react";
import axios from "axios";
const UpdateTodo = ({  identity ,createdAt, updatedAt}) => {
  const [state, setState] = React.useState({ title: "", message: "" });
  const [categoryChange, setCategoryChange] = React.useState("");
  const handleTitleChange = (e) => {
    setState((state) => ({ ...state, title: e.target.value }));
  };
  const handleCategoryChange = (e) => {
    setCategoryChange(() => e.target.value);
  };
  const handleMessageChange = (e) => {
    setState((state) => ({ ...state, message: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/todo/${identity}`, {
        title: state.title,
        message: state.message,
        categoryName: categoryChange,
      })
      .then((res) => {
        setState({ title: "", message: "" });
        setCategoryChange("");
        console.log("Good", res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't update TODO");
        console.log(err.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="titlechange"
          value={state.title}
          onChange={handleTitleChange}
        />
        <input
          placeholder="messagechange"
          value={state.message}
          onChange={handleMessageChange}
        />
        <input
          placeholder="categorychange"
          value={categoryChange}
          onChange={handleCategoryChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTodo;
