import {
  AppShell,
  BackgroundImage,
  Box,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import imageFooterDesktop from "@assets/desktop/image-footer.jpg";
import imageHeroLeft from "@assets/desktop/image-hero-left.png";
import imageHeroRight from "@assets/desktop/image-hero-right.png";
import imageManTexting from "@assets/desktop/image-man-texting.jpg";
import imageMenMeeting from "@assets/desktop/image-men-in-meeting.jpg";
import imageWomanInVideoCall from "@assets/desktop/image-woman-in-videocall.jpg";
import imageWomenVideoChatting from "@assets/desktop/image-women-videochatting.jpg";
import logo from "@assets/logo.svg";
import imageFooterMobile from "@assets/mobile/image-footer.jpg";
import imageFotterTablet from "@assets/tablet/image-footer.jpg";
import { Button1 } from "@components/Button1";
import { Button2 } from "@components/Button2";
import { SectionDivider } from "./components/SectionDivider";

const Home = () => {
  const tablet = useMediaQuery("(min-width: 768px)");
  const desktop = useMediaQuery("(min-width: 1440px)");

  const TopTitle = () => {
    return (
      <Stack spacing="xl" mt={48} mb={32} px={{ base: "xl" }} maw={540} mx="auto">
        <Title align="center" fz={{ base: 40, sm: 48, xl: 64 }} c="spinelStoneBlack">
          Group Chat
          <Text>for Everyone</Text>
        </Title>
        <Text align="center" fw={500} fz={{ xl: 18 }} c="mandrake">
          Meet makes it easy to connect with others face-to-face virtually and collaborate
          across any device.
        </Text>
        <Flex
          gap="md"
          direction={{ base: "column", sm: "row" }}
          justify="center"
          align="center"
          mt={{ xl: "sm" }}
        >
          <Button1>
            <Text>
              Download{" "}
              <Text component="span" c="silverpineCyan">
                v1.3
              </Text>
            </Text>
          </Button1>
          <Button2>What is it?</Button2>
        </Flex>
      </Stack>
    );
  };

  return (
    <AppShell fixed={false} padding={0} bg="drWhite">
      <Image src={logo} width={120} mx="auto" alt="Mantine logo" mt={48} mb={54} />
      <Group spacing="md">
        <Image src={imageHeroLeft} styles={{ root: { flex: 0.5 } }} alt="Hero left" />
        {desktop && <TopTitle />}
        <Image src={imageHeroRight} styles={{ root: { flex: 0.5 } }} alt="Hero right" />
      </Group>
      {!desktop && <TopTitle />}

      <Box my={64}>
        <SectionDivider>01</SectionDivider>
      </Box>
      <SimpleGrid
        cols={2}
        spacing="xl"
        breakpoints={[
          { minWidth: "sm", cols: 4, spacing: "sm" },
          { minWidth: "xl", cols: 4, spacing: 30 },
        ]}
        my={64}
        px={{ base: "xl", sm: 165 }}
      >
        <Image src={imageWomanInVideoCall} radius="md" alt="3" />
        <Image src={imageWomenVideoChatting} radius="md" alt="4" />
        <Image src={imageMenMeeting} radius="md" alt="2" />
        <Image src={imageManTexting} radius="md" alt="1" />
      </SimpleGrid>
      <Stack spacing={32} px={{ base: "xl", sm: 98, xl: 450 }}>
        <Text fw={900} lts={4} c="acapulcoCliffs" tt="uppercase" align="center">
          Built for modern use
        </Text>
        <Title align="center" c="spinelStoneBlack">
          Smarter meetings, all in one place
        </Title>
        <Text fw={500} c="mandrake" fz={{ xl: 18 }} align="center">
          Send messages, share files, show your screen, and record your meetings - all in
          one workspace. Control who can join with invite-only team access, data
          encryption, and data export.
        </Text>
      </Stack>
      <Box pos="relative" top={28} mt={36} sx={{ zIndex: 1 }}>
        <SectionDivider>02</SectionDivider>
      </Box>
      <Box ta="center" pos="relative">
        <BackgroundImage
          component={Image}
          opacity={0.1}
          fit="contain"
          src={
            desktop ? imageFooterDesktop : tablet ? imageFotterTablet : imageFooterMobile
          }
          inset={0}
          pos="absolute"
        />
        <Flex
          bg="acapulcoCliffs"
          direction={{ base: "column", xl: "row" }}
          align="center"
          justify="center"
          c="drWhite"
          pt={90}
          pb={70}
          px={{ base: "xl", sm: 100, xl: 165 }}
          gap={{ xl: 100 }}
          ta={{ base: "center", xl: "left" }}
        >
          <Title>Experience more together</Title>
          <Text fw={500} fz={18} mt={24} mb={32}>
            Stay connected with reliable HD meetings and unlimited one-on-one and group
            video sessions.
          </Text>
          <Button2>
            <Text>
              Download{" "}
              <Text component="span" c="lavenderFragrance">
                v1.3
              </Text>
            </Text>
          </Button2>
        </Flex>
      </Box>
    </AppShell>
  );
};

export { Home };
