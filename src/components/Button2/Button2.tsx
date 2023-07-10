import { Button } from "@mantine/core";
import { FC } from "react";

import { Button2Props as Props } from "./Button2.types";

const Button2: FC<Props> = props => {
  const {
    bg = "lustyLavender",
    fw = 900,
    radius = "xl",
    styles = { root: { "&:hover": { backgroundColor: "#B18BDD" } } },
    children,
    ...rest
  } = props;

  return (
    <Button {...{ bg, fw, radius, styles }} {...rest}>
      {children}
    </Button>
  );
};

export { Button2 };
