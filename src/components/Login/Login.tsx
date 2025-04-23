import {
  Button,
  Card,
  Center,
  Flex,
  Input,
  PasswordInput,
  Title,
} from "@mantine/core";
import { FormPropsType } from "../../types";
import { useForm } from "@mantine/form";

// const initialValues = { email: "", password: "" };

export const Login = (props: FormPropsType) => {
  // const [data, setData] = useState<DataSigninType>(initialValues);
  // const handleChange = ({ target }: { target: HTMLInputElement }) => {
  //   setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  // };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },
    validate: {
      password: (value) =>
        value.length < 3 ? "Пароль не может быть меньше 3 символов" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
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
              onSubmit={(e) => props.handleSubmit(e, form.getValues())}
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
