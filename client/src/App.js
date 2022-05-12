import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import UpdateTodo from "./UpdateTodo";
function App() {
  const [state, setState] = React.useState({ title: "", message: "" });
  const [category, setCategory] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [isUpdating, setIsUpdating] = React.useState(false);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/todo/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      title: state.title,
      message: state.message,
    };
    console.log({ todo });
    axios
      .post("http://localhost:8000/api/todo/post", {
        categoryName: category,
        title: state.title,
        message: state.message,
      })
      .then((res) => {
        setState({ title: "", message: "" });
        setCategory("");
        console.log("Good", res.data.message);
      })
      .catch((err) => {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      });
  }
  useEffect(() => {
    axios.get("http://localhost:8000/api/todo").then((data) => {
      setTodos(data.data.data);
      console.log(data.data.data);
    });
  }, []);
  const handleTitleChange = (e) => {
    setState((state) => ({ ...state, title: e.target.value }));
  };
  const handleCategoryChange = (e) => {
    setCategory(() => e.target.value);
  };
  const handleMessageChange = (e) => {
    setState((state) => ({ ...state, message: e.target.value }));
  };
  const getCount = () => {};
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isUpdating && <UpdateTodo />}
      <h1>Live Interview</h1>
      <section style={{ width: "50%", height: "5vh" }}>
        <form
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            style={{ width: "100%", height: "100%" }}
            placeholder="enter todo"
            name="Title"
            value={state.title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            style={{ width: "100%", height: "100%" }}
            placeholder="enter message"
            name="Message"
            value={state.message}
            onChange={handleMessageChange}
          />
          <input
            type="text"
            style={{ width: "100%", height: "100%" }}
            placeholder="enter category"
            name="Category"
            value={category}
            onChange={handleCategoryChange}
          />

          <button type="submit" style={{ height: "100%" }}>
            Post
          </button>
        </form>
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          width: "50%",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 5,
            cursor: "pointer",
          }}
          onClick={getCount}
        >
          Note
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 5,
            cursor: "pointer",
          }}
          onClick={getCount}
        >
          Todo
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 5,
            cursor: "pointer",
          }}
          onClick={getCount}
        >
          Plan
        </div>
      </section>
      <section>
        {todos.map((todo) => (
          <div key={todo._id}>
          <Todo  heading={todo.title} messagecontext={todo.message} id={todo.id} categ/>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
