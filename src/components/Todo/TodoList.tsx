import { FC, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers";
import { setTodo } from "store/actions/todo";

import TodoItem from "./TodoItem";

interface Props {}

const TodoList: FC<Props> = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootState) => state.todo);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const dragOverIndex = useRef<number | null>(null);

  const onDragStart = (index: number) => {
    setDraggingIndex(index);
  };

  const onDragEnd = () => {
    setDraggingIndex(null);
  };

  const changeOrder = (source: number, destination: number) => {
    const sourceItem = todoList[source];
    const targetFiltedTodos = todoList.filter(
      (todo, index) => index !== source
    );
    const prevTodos = targetFiltedTodos.slice(0, destination);
    const afterTodos = targetFiltedTodos.slice(destination);

    setDraggingIndex(dragOverIndex.current);
    dragOverIndex.current = null;

    dispatch(setTodo([...prevTodos, sourceItem, ...afterTodos]));
  };

  const onDragOver = (index: number) => {
    dragOverIndex.current = index;

    if (
      draggingIndex !== null &&
      dragOverIndex !== null &&
      draggingIndex !== dragOverIndex.current
    ) {
      changeOrder(draggingIndex, dragOverIndex.current);
    }
  };

  return (
    <List>
      {todoList &&
        todoList.map((todo, i) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDragStart={() => {
              onDragStart(i);
            }}
            onDragEnd={onDragEnd}
            onDragOver={() => {
              onDragOver(i);
            }}
            isDragging={i === draggingIndex}
          />
        ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;

  li + li {
    margin-top: 10px;
  }
`;

export default TodoList;
