import styled from "styled-components";

const Banner = styled.div`
  position: relative;
  background-color: hsl(248, 32%, 49%);
  width: 100%;
  height: 5.5em;
  border-radius: 10px;
  box-shadow: 0 10px 0px 0px #00000026;
  margin-bottom: 2em;
  @media (min-width: 1280px) {
    height: 3.5em;
    box-shadow: 0 5px 0px 0px #00000026;
    margin-bottom: 1.5em;
  }
  p {
    width: 60%;
    font-weight: ${({ theme }) => theme.fontWight.normal};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.5;
    span {
      font-weight: ${({ theme }) => theme.fontWight.bbolder};
    }
  }
`;

export default Banner;
