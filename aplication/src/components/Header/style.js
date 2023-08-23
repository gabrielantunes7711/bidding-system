import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 9rem;
  width: 100%;
  padding: 0 0 3rem 4.5rem;

  h1 {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 150%;
  }

  form {
    margin-left: auto;
  }
`;

export default Container;
