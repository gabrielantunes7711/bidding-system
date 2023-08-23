import styled from "styled-components";

const Container = styled.div`
  & > * {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .header {
    padding: 0 1.5rem;
    margin-bottom: 3rem;
    color: var(--secondary-text-color);
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 150%;
    text-transform: uppercase;
    text-align: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      flex: 1;

      button {
        background-color: transparent;
        border: none;
        font-size: 1.8rem;
        color: var(--primary-text-color);
      }
    }
  }

  .row {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--border-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    background-color: var(--odd-table-color);
    text-align: center;
  }

  .row:nth-child(even) {
    background-color: var(--even-table-color);
  }

  .row:last-of-type {
    border-bottom: 1px solid var(--border-color);
  }

  span {
    flex: 1;
  }

  .status {
    width: 15rem;
    padding: 0.5rem 1.5rem;
    margin: 0 auto;
    background-color: black;
    border-radius: 10rem;
    color: white;

    &.sended {
      background-color: #efae78;
    }

    &.confirmed {
      background-color: #26979f;
    }

    &.refused {
      background-color: #15212a;
      color: white;
    }

    &.registered {
      background-color: #66af91;
    }

    &.not-found {
      background-color: #e6626f;
    }
  }

  .MuiPagination-root {
    justify-content: center;
    margin-top: 3rem;

    .MuiButtonBase-root {
      &.Mui-selected {
        background-color: var(--primary-color);
        color: white;
      }
      &:hover {
        opacity: 0.7;
        background-color: var(--primary-color);
        color: white;
      }
    }
  }
`;

export default Container;
