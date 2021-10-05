import styled from "styled-components";

const Main = styled.main`
  text-align: center;
  width: 95%;
  max-width: 1400px;
  margin: 5em auto;
  @media (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1280px) {
    width: 80%;
    margin: auto;
  }
`;

export default Main;
