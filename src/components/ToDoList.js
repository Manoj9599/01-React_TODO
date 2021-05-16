import React, { useState } from 'react';

const ToDoList = ({ toDos, setToDos, toDo, setToDo, setEditId }) => {
  // Handle Delete
  const handleDelete = (id) => {
    let filteredItems = toDos.filter((toDos) => {
      return toDos.id !== id;
    });
    setToDos([...filteredItems]);
  };

  const handleEdit = (id) => {
    let editedItem = toDos.find((toDos) => {
      return toDos.id === id;
    });
    setToDo(editedItem.value);
    setEditId(id);
  };

  return (
    <>
      <div>
        {toDos ? (
          <>
            {toDos.map((toDos) => {
              return (
                <div key={toDos.id} className="listItems">
                  <p>{toDos.value}</p>
                  <button
                    className="btn btn-secondary"
                    onClick={handleEdit.bind(this, toDos.id)}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleDelete.bind(this, toDos.id)}
                  >
                    delete
                  </button>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ToDoList;
