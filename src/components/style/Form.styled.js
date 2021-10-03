import styled from "styled-components";

const Form = styled.div`
  background-color: white;
  height: auto;
  border-radius: 10px;
  padding: 1em 0;
  input {
    padding: 1.5em;
    margin: 0.5em;
    width: 85%;
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.fontWight.bbolder};
    border: 1px solid #00000026;
    outline: none;
  }
  button {
    color: white;
    font-weight: ${({ theme }) => theme.fontWight.bbolder};
    letter-spacing: 2px;
    width: 85%;
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
    font-size: 0.9rem;
    line-height: 1.5;
    a {
      color: hsl(0, 100%, 74%);
    }
  }
`;

export default Form;
