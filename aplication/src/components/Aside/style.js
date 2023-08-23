import styled from "styled-components";
import Divider from "../Divider/Divider";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 25rem;

  ${Divider} {
    margin: 0 0 2.2rem;
  }
`;

export default Container;
