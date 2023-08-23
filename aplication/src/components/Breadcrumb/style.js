import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .links {
    display: flex;
    gap: 1rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: var(--secondary-text-color);
    text-transform: capitalize;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 140%;
    text-transform: capitalize;
  }

  a.active:last-of-type {
    color: var(--primary-text-color);
    font-weight: 600;
  }
`;

export default Container;
