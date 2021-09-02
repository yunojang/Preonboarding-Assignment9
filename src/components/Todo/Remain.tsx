import { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";

interface Props {}

const Remain: FC<Props> = () => {
  const { todoList } = useSelector((state: RootState) => state.todo);
  const remainCount = todoList.filter((todo) => !todo.checked).length;

  return (
    <Alert>
      <span>{remainCount}</span> items left
    </Alert>
  );
};

const Alert = styled.div`
  margin-bottom: 20px;
  user-select: none;

  span {
    font-size: 17px;
    font-weight: bold;
  }
`;

export default Remain;
