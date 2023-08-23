import styled from "styled-components";
import Select from "../Form/Select/style";
import Input from "../Form/Input/style";

const Container = styled.aside`
  position: fixed;
  transform: ${({ asideVisibility }) =>
    asideVisibility ? "translateX(0)" : "translateX(100%)"};
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1rem;
  width: 35rem;
  height: 100vh;
  background-color: white;
  transition: transform ease 300ms;
  box-shadow: ${({ asideVisibility }) =>
    asideVisibility ? "40px 0px 81px 0px rgba(0,0,0,0.75)" : "none"};

  & > button {
    position: absolute;
    transform: translateX(-100%);
    top: 13rem;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: white;
    padding: 1rem 0.5rem 1rem 1rem;
    border-radius: 50% 0 0 50%;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    button {
      transition: all ease 300ms;

      &:hover {
        color: var(--primary-color);
        text-decoration: underline;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;

    & > button {
      justify-content: center;
      margin-top: auto;
    }
  }

  .filter-wrapper {
    padding: 1.4rem 0;
    border-top: 1px solid var(--border-color);
    transition: all ease 500ms;

    &:last-of-type {
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 2rem;
    }

    button {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        font-size: 1.2rem;
        pointer-events: none;
        transition: all ease 300ms;
      }

      &.opened {
        svg {
          transform: rotate(90deg);
        }
      }
    }

    ${Select}, ${Input} {
      height: 0;
      overflow: hidden;
      transition: all ease 500ms;
    }
  }
`;

export default Container;
