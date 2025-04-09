import { useState } from "react";
import { TextInput } from "./TextInput";
import { DataSigninType, FormPropsType } from "../types";

const initialValues = { email: "", password: "" };

export const Signin = (props: FormPropsType) => {
  const [data, setData] = useState<DataSigninType>(initialValues);
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <div className="formWrapper">
      <form className="form" onSubmit={(e) => props.handleSubmit(e, data)}>
        <h3>Авторизация</h3>
        <TextInput
          type="email"
          name="email"
          label="Email"
          placeholder="Введите вашу электронную почту"
          onChange={handleChange}
          value={data.email}
        />
        <TextInput
          name="password"
          type="password"
          label="Пароль"
          onChange={handleChange}
          value={data.password}
          // placeholder="Введите вашу электронную почту"
        />
        <button type="submit" style={{ padding: "10px", marginTop: "20px" }}>
          Войти
        </button>
      </form>
    </div>
  );
};
