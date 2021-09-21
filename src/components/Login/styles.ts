import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  h1 {
    margin: 24px 0;
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;
export const EmailInput = styled.input`
  width: 380px;
  background: var(--primaryWhite);
  height: 2.25em;
  padding: 0 0.75rem;
  font-size: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border: 1px solid var(--grey300);
  color: var(--grey500);

  &:focus {
    outline: none;
    border: 1px solid var(--primaryColor);
  }

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: var(--grey500);
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 406px;
  display: flex;
  flex-direction: row;

  div {
    position: absolute;
    height: 24px;
    width: 24px;
    inset: 6px 12px auto auto;
    cursor: pointer;
  }
`;

export const PasswordInput = styled(EmailInput)`
  width: 100%;
  padding-right: 50px;
  border-top-left-radius: 0rem;
  border-top-right-radius: 0rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top-color: var(--primaryWhite);
`;
export const Button = styled.button`
  width: 100%;
  background-color: var(--primaryColor);
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--primaryWhite);
  padding: 0.5em 0;
  border-radius: 0.5em;
  cursor: pointer;
  margin-bottom: 24px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: var(--teal400);
    transition: 0.2s ease-in-out;
  }
`;
export const Link = styled.a`
  cursor: pointer;
  color: var(--primaryColor);
`;
