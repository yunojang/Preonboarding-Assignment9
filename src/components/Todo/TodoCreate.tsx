import { FC } from "react";
import styled from "styled-components";

import Form from "./template/Form";

interface Props {}

const TodoCreate: FC<Props> = (props) => {
  return (
    <TodoForm>
      <input type="text" placeholder="해야할 일을 입력하세요" />
      <input type="submit" value="+" />
    </TodoForm>
  );
};

const TodoForm = styled(Form)`
  margin-bottom: 20px;
`;

export default TodoCreate;
