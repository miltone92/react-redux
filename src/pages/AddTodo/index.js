import React from "react";

const AddTodo = ({ actions }) => {
  let input;

  const onSubmit = event => {
    event.preventDefault();
    actions.addTodo(input.value);
    input.value = "";
  };

  return (
    <div>
      <form onSubmit={event => onSubmit(event)}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
