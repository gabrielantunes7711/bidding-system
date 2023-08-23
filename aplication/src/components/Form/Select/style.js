import styled from "styled-components";

const Container = styled.div`
  label {
    display: block;
    margin: 0 0 0.5rem 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }

  select {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    border-radius: 1.5rem;
    border: 0.5px solid var(--border-color);
    background: var(--primary-bg-color);
    outline: none;

    &:focus {
      box-shadow: 0 0 4px rgba(79, 209, 197, 0.5);
    }
  }
`;

export default Container;
