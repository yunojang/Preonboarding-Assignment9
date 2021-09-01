import { FC } from "react";
import styled from "styled-components";

interface Props {}

const Remain: FC<Props> = () => {
  return (
    <Alert>
      <span>n</span> items left
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
