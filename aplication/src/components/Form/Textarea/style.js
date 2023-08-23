import styled from "styled-components";

const Container = styled.div`
  textarea {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 10rem;
    padding: 1rem;
    border-radius: 1.5rem;
    border: 0.5px solid var(--border-color);
    background: var(--primary-bg-color);
    resize: none;
    outline: none;

    &:focus {
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
`;

export default Container;
