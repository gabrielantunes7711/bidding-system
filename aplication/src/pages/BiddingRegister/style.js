import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem 2rem;
  flex: 1;
  padding: 3rem 2rem;
  background-color: white;
  border-radius: 1.5rem;

  & > div {
    width: calc(50% - 1rem);
  }

  & > div:nth-child(3),
  & > div:nth-child(8) {
    width: 100%;
  }
`;

export default Container;
