import { Box, Center, Stack } from "@mantine/core";
import { FC } from "react";

import { SectionDividerProps as Props } from "./SectionDivider.types";

const SectionDivider: FC<Props> = props => {
  const { children } = props;

  return (
    <Stack align="center" spacing={0} c="mandrake">
      <Box
        sx={theme => ({
          height: 85,
          width: 1,
          backgroundColor: theme.colors.mandrake[3],
        })}
      />
      <Center
        fw={900}
        w={56}
        h={56}
        bg="drWhite"
        sx={theme => ({
          borderColor: theme.colors.mandrake[3],
          borderRadius: theme.radius.xl,
          borderWidth: 1,
          borderStyle: "solid",
        })}
      >
        {children}
      </Center>
    </Stack>
  );
};

export { SectionDivider };
