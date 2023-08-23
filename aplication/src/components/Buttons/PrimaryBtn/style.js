import styled from "styled-components";

const Container = styled.button`
  display: flex;
  padding: 1rem 3rem;
  border-radius: 12px;
  background: var(--primary-color);
  color: white;
  font-weight: 700;
  line-height: 150%;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all ease 300ms;

  &:hover {
    background-color: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;

export default Container;
