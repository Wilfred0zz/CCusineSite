import React, { Component } from "react";
import {
  Input,
  NativeSelect,
  Button,
  Card,
  Center,
  PasswordInput,
  Group,
  Space,
} from "@mantine/core";
import { IconLock } from "@tabler/icons";

export default function Regiser() {
  return (
    <div>
      yea
      <Center style={{ height: 850 }}>
        <Card
          shadow="md"
          p="lg"
          radius="md"
          withBorder
          sx={(theme) => ({
            color: theme.colors.yellow[5],
            textDecoration: "none",
            width: 800,
            height: 700,
          })}
        >
          <Input.Wrapper label="First Name" size="lg">
            <Input />
          </Input.Wrapper>

          <Space h={"lg"} />

          <Input.Wrapper label="Last Name" size="lg">
            <Input />
          </Input.Wrapper>

          <Space h={"lg"} />

          <Input.Wrapper label="University Email" size="lg">
            <Input />
          </Input.Wrapper>

          <Space h={"lg"} />

          <PasswordInput
            size="lg"
            icon={<IconLock size={16} />}
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            withAsterisk
          />
          <Space h={"lg"} />

          <PasswordInput
            size="lg"
            icon={<IconLock size={16} />}
            placeholder="Password"
            label="Confirm Password"
            withAsterisk
          />
          <Space h={"lg"} />
          <NativeSelect
            size="lg"
            data={["Hunter", "City", "BMCC", "Baruch", "Lehman"]}
            label="Select your College"
            description="This is anonymous"
            withAsterisk
          />
          <Space h={"lg"} />
          <Center>
            <Button color="indigo" radius="md" size="md">
              {" "}
              Submit
            </Button>
          </Center>
        </Card>
      </Center>
    </div>
  );
}
