import styled from "styled-components";
import MAIN_COLOR, { DARK_COLOR } from "constant/color";

const RADIUS_DEGREE = 5;

const Form = styled.form`
  display: flex;

  input[type="text"] {
    border: 2px solid #cfcfcf;
    border-right: 2px solid ${MAIN_COLOR};
    border-top-left-radius: ${RADIUS_DEGREE}px;
    border-bottom-left-radius: ${RADIUS_DEGREE}px;
    padding: 10px 8px;
    outline: none;
    color: ${DARK_COLOR};
    transition: 0.15s;
    flex: 1;
  }

  input:focus {
    border: 2px solid ${MAIN_COLOR};
  }

  input::placeholder {
    color: ${DARK_COLOR};
  }

  input[type="submit"] {
    border: 0;
    background: ${MAIN_COLOR};
    border-top-right-radius: ${RADIUS_DEGREE}px;
    border-bottom-right-radius: ${RADIUS_DEGREE}px;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    width: 55px;
  }
`;

export default Form;
