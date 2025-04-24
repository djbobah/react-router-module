import {
  Button,
  Card,
  Center,
  Flex,
  Input,
  PasswordInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { DataSigninType } from "./types";

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      password: (value) =>
        value.length < 3 ? "Пароль не может быть меньше 3 символов" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    data: DataSigninType
  ) => {
    e.preventDefault();

    auth &&
      auth.signIn({
        newUser: data,
        callback: () => navigate(from, { replace: true }),
      });
  };

  return (
    <Center mt={50}>
      <Flex>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Title order={3} mt={20}>
              Авторизация
            </Title>
            <form
              className="form"
              onSubmit={(e) => handleSubmit(e, form.getValues())}
            >
              <Input.Wrapper label="Email">
                <Input
                  type="email"
                  placeholder="Введите вашу электронную почту"
                  name="email"
                  {...form.getInputProps("email")}
                />
              </Input.Wrapper>
              <PasswordInput
                label="Пароль"
                placeholder="Введите пароль"
                name="password"
                {...form.getInputProps("password")}
              />
              <Button type="submit" variant="filled">
                Войти
              </Button>
            </form>
          </Card.Section>
        </Card>
      </Flex>
    </Center>
  );
};
