import styled from "styled-components";

const Container = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 5rem;
    padding: 0 1rem;
    border-radius: 1.5rem;
    border: 0.5px solid var(--border-color);
    background: var(--primary-bg-color);

    &:focus-within {
      box-shadow: 0 0 4px rgba(79, 209, 197, 0.5);
    }
  }

  label {
    display: block;
    margin: 0 0 0.5rem 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
  }

  input::placeholder {
    color: var(--secondary-text-color);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 150%;
  }
`;

export default Container;
