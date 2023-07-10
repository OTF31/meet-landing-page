import { Button } from "@mantine/core";
import { FC } from "react";

import { Button1Props as Props } from "./Button1.types";

const Button1: FC<Props> = props => {
  const {
    bg = "acapulcoCliffs",
    fw = 900,
    radius = "xl",
    size = "xl",
    styles = { root: { "&:hover": { backgroundColor: "#71C0D4" } } },
    children,
    ...rest
  } = props;

  return (
    <Button {...{ bg, fw, radius, size, styles }} {...rest}>
      {children}
    </Button>
  );
};

export { Button1 };
