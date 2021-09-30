import styled from "styled-components";

const SectionOne = styled.section`
  width: 100%;
  margin-bottom: 3.5em;
  div:nth-child(1) {
    width: 80%;
    margin: 0 auto 2em auto;
    h1 {
      font-size: 2rem;
      font-weight: ${({ theme }) => theme.fontWight.bbolder};
    }
  }
  div:nth-child(2) {
    width: 87%;
    margin: auto;
    p {
      font-size: 1.1rem;
      font-weight: ${({ theme }) => theme.fontWight.normal};
      line-height: 1.5em;
    }
  }
`;

export default SectionOne;
