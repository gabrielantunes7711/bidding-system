import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  max-width: 22rem;
  padding: 1.6rem 1.2rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: none;
  color: var(--secondary-text-color);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 150%;
  text-decoration: none;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
    border-radius: 1.2rem;
    background: var(--primary-bg-color);
    color: var(--primary-color);

    svg {
      width: 1.5rem;
      height: auto;
    }
  }

  &.active {
    box-shadow: 0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02);
    background-color: var(--primary-bg-color);
    color: var(--primary-text-color);

    span {
      background: var(--primary-color);
      color: var(--primary-bg-color);
    }
  }
`;

export default Container;
