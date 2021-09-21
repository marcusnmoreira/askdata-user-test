import styled from "styled-components";

export const HeaderPagesContainer = styled.div`
  background-color: var(--primaryWhite);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  padding: 24px 42px 12px 38px;

  > span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: var(--primaryColor);
  }

  > h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
`;
