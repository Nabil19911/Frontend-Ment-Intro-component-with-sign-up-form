import styled from "styled-components";

const SectionOne = styled.section`
  width: 100%;
  margin-bottom: 3.5em;
  @media (min-width: 1280px) {
    text-align: left;
    margin-bottom: 0;
  }
  div:nth-child(1) {
    width: 80%;
    margin: 0 auto 2em auto;
    @media (min-width: 1280px) {
      width: 87%;
    }
    h1 {
      font-size: 2rem;
      font-weight: ${({ theme }) => theme.fontWight.bbolder};
      @media (min-width: 1280px) {
        font-size: 2.8rem;
        letter-spacing: 1px;
      }
    }
  }
  div:nth-child(2) {
    width: 87%;
    margin: auto;
    p {
      font-size: 1.1rem;
      font-weight: ${({ theme }) => theme.fontWight.normal};
      line-height: 1.5em;
      @media (min-width: 1280px) {
        font-size: 1rem;
        width: 86%;
      }
    }
  }
`;

export default SectionOne;