import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "store/actions/modal";
import styled from "styled-components";
import ModalContent from "types/modal";
import MAIN_COLOR from "constant/color";

interface Props {
  content: ModalContent;
}

const Modal: FC<Props> = ({ content }) => {
  const { title, body } = content;
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyDown = (e: any) => {
      if (e.key === "Escape") {
        dispatch(closeModal());
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dispatch]);

  const onClose = (e: any) => {
    if (!e.target.dataset.close) {
      return;
    }

    dispatch(closeModal());
  };

  return (
    <Dim onClick={onClose} data-close>
      <ModalContainer>
        <Title>{title}</Title>

        {body}

        <ButtonContainer>
          <ConfirmButton onClick={onClose} data-close>
            확인
          </ConfirmButton>
        </ButtonContainer>
      </ModalContainer>
    </Dim>
  );
};

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 20px 30px;
  animation: padeIn 0.15s cubic-bezier(0, 0, 0, 1),
    slideUp 0.15s cubic-bezier(0, 0, 0, 1);
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: normal;
  border-bottom: 2px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  width: 105px;
  height: 32px;
  background: ${MAIN_COLOR};
  cursor: pointer;
  color: white;
  border-radius: 5px;
`;

export default Modal;
