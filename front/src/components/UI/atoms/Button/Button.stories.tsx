import React from "react";
import { text } from "@storybook/addon-knobs";

import Button from ".";

export default {
  title: "Atoms/Button",
  component: Button,
};

export const Default = () => {
  const name = text("name", "default");
  const onClick = () => {
    return "test";
  };

  return <Button name={name} onClick={onClick} />;
};
