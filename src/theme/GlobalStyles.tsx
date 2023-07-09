import { Global } from "@mantine/core";
import redHatDisplay from "@assets/fonts/RedHatDisplay-VariableFont_wght.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "RedHatDisplay",
            src: `url(${redHatDisplay}) format("truetype")`,
          },
        },
      ]}
    />
  );
};

export { GlobalStyles };
