import styled from "styled-components";

const Form = styled.div`
  background-color: white;
  height: auto;
  border-radius: 10px;
  padding: 2em 0;
  box-shadow: 0 5px 0px 0px #00000026;
  form {
    width: 85%;
    margin: auto;
    > small {
      display: block;
      color: hsl(0, 100%, 74%);
      text-align: right;
      margin-bottom: 1em;
      font-weight: ${({ theme }) => theme.fontWight.bbolder};
      font-size: 0.5rem;
    }
  }
  input {
    padding: 1.2em 2em;
    margin: 1em auto;
    width: 100%;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.fontWight.bbolder};
    border: 1px solid #00000026;
    outline: none;
    border-radius: 5px;
    &.error {
      border: 2px solid hsl(0, 100%, 74%);
      color: hsl(0, 100%, 74%);
      background-image: url("../assert/images/icon-error.svg");
      background-repeat: no-repeat;
      background-position: right 1em center;
    }
  }
  button {
    color: white;
    font-weight: ${({ theme }) => theme.fontWight.bbolder};
    letter-spacing: 2px;
    width: 100%;
    background-color: hsl(154, 59%, 51%);
    height: 4em;
    border-radius: 7px;
    margin: 0.5em 0;
    border: none;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0 3px 0px 0px #38cc8c87;
    }
  }
  div:nth-child(2) {
    color: #bfbfbf;
    font-weight: ${({ theme }) => theme.fontWight.bbolder};
    width: 80%;
    margin: auto auto 2em auto;
    font-size: 0.7rem;
    line-height: 1.5;
    a {
      color: hsl(0, 100%, 74%);
      text-decoration: none;
      font-weight: 800;
    }
  }
`;

export default Form;
