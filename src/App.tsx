import { useSelector } from "react-redux";
import { RootState } from "store/reducers";
import Todo from "components/Todo";
import Modal from "components/Modal";
import styled from "styled-components";

function App() {
  const modal = useSelector((state: RootState) => state.modal);

  return (
    <Container className="App">
      <Todo />

      {modal.show && modal.content && <Modal content={modal.content} />}
    </Container>
  );
}

const Container = styled.div`
  padding: 40px 0px;
`;

export default App;
