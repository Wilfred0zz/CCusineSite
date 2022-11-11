import React from "react";
import { Link } from "react-router-dom";
import ccquote from "./static/ccquote.png";
import ccbackground from "./static/ccbackground.png";
import ccaward from "./static/ccaward.png";

import {
  Box,
  BackgroundImage,
  Title,
  Image,
  Input,
  PasswordInput,
  Space,
  Center,
  Card,
  Button,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
import "./static/HomePage.css";

export default function HomePage() {
  return (
    <div>
      <div className="MainPage">
        <Box sx={{ minWidth: 800, minHeight: 1000 }} mx="auto">
          <body className="LoginBox">
            <Center style={{ height: 750 }}>
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                sx={(theme) => ({
                  color: theme.colors.yellow[5],
                  textDecoration: "none",
                  width: 600,
                  height: 450,
                })}
              >
                <Card.Section>
                  <Image src={ccquote} height={80} alt="FEAST BEFORE DEFEAT" />
                </Card.Section>

                <Center>
                  <Title
                    mt={4}
                    order={1}
                    color="navy"
                    italic
                    style={{ fontFamily: " cursive" }}
                  >
                    Campus{" "}
                  </Title>
                  <Title
                    mt={4}
                    order={1}
                    italic
                    style={{ fontFamily: " cursive" }}
                  >
                    Cuisine
                  </Title>
                </Center>

                <Space h="lg" />

                <Input.Wrapper label="Email" size="lg">
                  <Input radius="md" size="lg" />
                </Input.Wrapper>

                <Space h="sm" />

                <PasswordInput
                  label="Password"
                  
                  radius="md"
                  size="lg"
                />

                <Space h="md" />

                <Center>
                  <Button color="indigo" radius="md" size="md">
                    Login
                  </Button>
                </Center>

                <Space h="md" />

                <Center>
                  <Button color="indigo" radius="md" size="md" variant="subtle" component={Link} to="/registerPage">
                    Register
                  </Button>
                </Center>
              </Card>
            </Center>
          </body>
        </Box>
      </div>
    </div>
  );
}
