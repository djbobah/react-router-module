import { useState } from "react";
import { Avatar, Burger, Container, Group, Menu, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { IconDualScreen } from "@tabler/icons-react";
import { useAuth } from "../../shared/context/AuthProvider";

const links = [
  { link: "/", label: "Главная" },
  { link: "/characters", label: "Персонажи" },
  { link: "/locations", label: "Локации" },
  { link: "/episodes", label: "Эпизоды" },
];

export const NavBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const auth = useAuth();
  const handleSignOut = () => {
    auth && auth.signOut();
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Title order={2}>Rick and Morty</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        {auth && auth.user && (
          <Menu shadow="md" width={100}>
            <Menu.Target>
              <Avatar radius="xl" />
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                rightSection={<IconDualScreen size={14} />}
                onClick={handleSignOut}
              >
                Exit
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Container>
    </header>
  );
};
