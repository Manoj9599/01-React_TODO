import React, { useState } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

import ToDoList from './ToDoList';

const ToDo = () => {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const [editId, setEditId] = useState(0);

  let handleClick = () => {
    if (!toDo) {
      alert('enter an item');
    } else if (editId) {
      setToDos(
        toDos.map((toDos) => {
          if (toDos.id === editId) {
            return { ...toDos, value: toDo };
          }
          return toDos;
        })
      );
      setToDo(' ');
      setEditId(0);
    } else {
      setToDos([{ id: Date.now(), value: toDo }, ...toDos]);
      setToDo(' ');
    }
  };

  const handleClearAllItems = () => {
    !toDo ? alert('There is no items to clear') : setToDos([]);
  };

  return (
    <>
      <div className="container">
        <Row>
          <Col>
            <Card className="text-center bg-primary">
              <Card.Header>ToDo App</Card.Header>
              <Card.Body className="bg-info">
                <Form className="form">
                  <Form.Control
                    type="email"
                    placeholder="Enter item"
                    value={toDo}
                    onChange={(e) => {
                      setToDo(e.target.value);
                    }}
                  />
                  <Button onClick={handleClick}>
                    {editId ? 'Edit' : 'Add'}
                  </Button>
                </Form>
                <ToDoList
                  toDos={toDos}
                  setToDos={setToDos}
                  toDo={toDo}
                  setToDo={setToDo}
                  setEditId={setEditId}
                />
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" onClick={handleClearAllItems}>
                  Clear all items
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ToDo;
