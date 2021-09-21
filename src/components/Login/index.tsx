import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Toaster from "../Toaster";
import { EyeOffIcon, EyeOnIcon, Logo } from "../commons/svg";
import {
  Button,
  EmailInput,
  InputWrapper,
  Link,
  LoginWrapper,
  PasswordInput,
  PasswordContainer,
} from "./styles";

interface IFormSubmit {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IFormSubmit>();
  let history = useHistory();

  const clearInputsAfterSubmit = (): void => {
    let inputs: HTMLCollectionOf<HTMLInputElement> =
      document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  const onSubmit = handleSubmit((data) => {
    if (data.email !== "user@askdata.me" || data.password !== "askdata") {
      setShowToaster(true);
      clearInputsAfterSubmit();
    } else {
      setShowToaster(false);
      history.push("/userarea/meustimes");
    }
  });

  return (
    <LoginWrapper>
      {showToaster && <Toaster onclick={() => setShowToaster(false)} />}
      <Logo />
      <h1>Entre na sua conta</h1>
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <EmailInput {...register("email")} placeholder="Email" type="text" />
          <PasswordContainer>
            <PasswordInput
              {...register("password")}
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
            />
            <div onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
            </div>
          </PasswordContainer>
        </InputWrapper>
        <Button type="submit">Entrar</Button>
      </form>
      <Link>Esqueceu sua senha?</Link>
    </LoginWrapper>
  );
};

export default Login;
