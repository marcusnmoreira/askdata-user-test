import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;

  > p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #374151;
    margin-right: 8px;
  }
  > div {
    position: relative;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 12px 12px 16px;
  background: #ffffff;
  /* gray/300 */

  border: 1px solid #d1d5db;
  box-sizing: border-box;
  /* shadow/sm */

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  cursor: pointer;

  span {
    margin-right: 8px;
  }
`;

export const DropdownListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 48px 12px 12px;
  margin-top: 4px;
  inset: auto 0 auto auto;

  /* white */
  background: var(--primaryWhite);

  /* gray/300 */
  border: 1px solid #d1d5db;
  box-sizing: border-box;

  /* shadow/sm */
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  ul {
    list-style-type: none;
  }

  li:not(:first-child) {
    margin-top: 8px;
  }
`;
