import Head from "next/head";
import NFImage from "next/future/image";
import * as React from "react";
import * as Chakra from "@chakra-ui/react";

import GITHUB_ICON from "../src/images/GitHub-Mark-120px-plus.png";
import GDRIVE_ICON from "../src/images/drive_2020q4_48dp.png";
import ToptalIcon from "../src/images/toptal.svg";
import CodementorIcon from "../src/images/codementor.svg";
import ArcIcon from "../src/images/arc.svg";
import LinkedInIcon from "../src/images/linkedin.svg";

const CARD_LIST = [
  {
    layout: "horizontal",
    iconEl: (
      <NFImage
        src={GITHUB_ICON}
        width="80"
        height="80"
        style={{ maxWidth: "initial", width: 80, height: 80 }}
      />
    ),
    title: "Open Source Contributor",
    url: "https://github.com/tomchentw",
    descEl: <Chakra.Text color="gray.600"></Chakra.Text>,
  },
  {
    layout: "horizontal",
    iconEl: <LinkedInIcon />,
    title: "Profile",
    url: "https://www.linkedin.com/in/tomchentw/",
    descEl: "",
  },
  {
    layout: "horizontal",
    iconEl: (
      <NFImage
        src={GDRIVE_ICON}
        width="80"
        height="80"
        style={{ maxWidth: "initial", width: 80, height: 80 }}
      />
    ),
    title: "Resume",
    url: "https://drive.google.com/file/d/16v9dlpbaR9J5016UPNKdYb7sWYCBReRY/view?usp=sharing",
    descEl: "",
  },
  {
    layout: "horizontal",
    iconEl: <ToptalIcon />,
    title: "Verified",
    url: "https://www.toptal.com/resume/tom-chen",
    descEl: (
      <Chakra.Text color="gray.600">
        “Hire the <strong>Top 3%</strong> of Developers“
      </Chakra.Text>
    ),
  },
  {
    layout: "vertical",
    iconEl: <CodementorIcon />,
    title: "",
    url: "https://www.codementor.io/@tomchentw",
    descEl: (
      <Chakra.Text color="gray.600">
        Served <b>133</b> sessions with <strong>all 5 stars reviews</strong>
      </Chakra.Text>
    ),
  },
  {
    layout: "horizontal",
    iconEl: <ArcIcon />,
    title: "Member",
    url: "https://arc.dev/tomchentw",
    descEl: "",
  },
];

function Card({
  card: { layout, prefix, iconEl, title, postfix, url, descEl },
}) {
  return (
    <Chakra.LinkBox
      as={"horizontal" === layout ? Chakra.HStack : Chakra.VStack}
      bgColor="gray.50"
      boxShadow="lg"
      p={4}
      rounded={["md", "xl"]}
    >
      {"horizontal" === layout && (
        <Chakra.Center flex="0 1 auto" boxSize={24}>
          {iconEl}
        </Chakra.Center>
      )}
      <Chakra.VStack flex="1" align="stretch">
        {"vertical" === layout && iconEl}
        <Chakra.Heading size="md">{title}</Chakra.Heading>
        <Chakra.LinkOverlay href={url} isExternal>
          <Chakra.Text
            fontSize="xs"
            color="blue.500"
            sx={{
              "&": {
                wordWrap: "anywhere",
              },
            }}
          >
            {url}
          </Chakra.Text>
        </Chakra.LinkOverlay>
        {descEl}
      </Chakra.VStack>
    </Chakra.LinkBox>
  );
}

const RECORD_LIST = [
  {
    kind: "pull-request",
    date: "2022-05-25",
    url: "https://github.com/date-fns/date-fns/pull/3062",
    title: "[Docs] list out functions usages with the locale",
  },
  {
    kind: "pull-request",
    date: "2022-05-25",
    url: "https://github.com/uselessdev/datepicker/pull/43",
    title: "Fix locale usage of date-fns in the datepicker components",
  },
  {
    kind: "pull-request",
    date: "2022-05-23",
    url: "https://github.com/uselessdev/datepicker/pull/41",
    title: "Fix unscoped React global variable in the compiled module",
  },
  {
    kind: "pull-request",
    date: "2022-05-23",
    url: "https://github.com/uselessdev/datepicker/pull/38",
    title: "[Docs] add storybook control for the locale option",
  },
  {
    kind: "pull-request",
    date: "2021-07-27",
    url: "https://github.com/chakra-ui/chakra-ui/pull/4451",
    title: "[Docs] reduces 32.2% size of the docs site",
  },
  {
    kind: "pull-request",
    date: "2021-07-19",
    url: "https://github.com/chakra-ui/chakra-ui/pull/4410",
    title: "Debug chakra-ui GitHub action's bug",
  },
  {
    kind: "proposal",
    date: "2021-07-08",
    url: "https://github.com/chakra-ui/chakra-ui/pull/4345",
    title: "[Docs] add a feature that could apply a custom theme",
  },
  {
    kind: "bug-report",
    date: "2021-07-08",
    url: "https://github.com/chakra-ui/chakra-ui/issues/4347",
    title: "Issue with the AspectRatio & Image components in Chakra-UI",
  },
  {
    kind: "pull-request",
    date: "2021-07-02",
    url: "https://github.com/chakra-ui/chakra-ui/pull/4318",
    title: "[Docs] fix lodash import usage",
  },
  {
    kind: "proposal",
    date: "2021-06-27",
    url: "https://github.com/chakra-ui/chakra-ui/pull/4292",
    title: "[Docs] apply a custom theme directly",
  },
  {
    kind: "pull-request",
    date: "2021-05-22",
    url: "https://github.com/pnpm/pnpm.github.io/pull/114",
    title: "[Docs] debug why pnpm benchmarks not reflected",
  },
  {
    kind: "proposal",
    date: "2021-05-06",
    url: "https://github.com/chakra-ui/chakra-ui/discussions/3964",
    title: "About using yarn berry in Chakra-UI monorepo",
  },
  {
    kind: "pull-request",
    date: "2021-04-09",
    url: "https://github.com/chakra-ui/chakra-ui/pull/3775",
    title: "Fix the missing dependency issue of @chakra-ui/react-utils",
  },
];

function Record({ record: { kind, date, url, title } }) {
  const [, repo] = url.match(/^https\:\/\/github\.com\/([^\/]+\/[^\/]+)/);

  return (
    <Chakra.LinkBox as={Chakra.HStack} role="group">
      <Chakra.Box w={32} flexShrink="0">
        <Chakra.Text
          fontSize="sm"
          color="blue.500"
          _groupHover={{
            textDecoration: "underline",
          }}
        >
          {repo}
        </Chakra.Text>
        <Chakra.Text fontStyle="italic" fontSize="xs">
          {date}
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.HStack>
        <Chakra.Text
          w={20}
          flexShrink="0"
          fontStyle="bold"
          fontSize="sm"
          fontWeight="500"
        >
          {kind}
        </Chakra.Text>
        <Chakra.LinkOverlay href={url} isExternal>
          <Chakra.Heading as="h3" size="md">
            {title}
          </Chakra.Heading>
        </Chakra.LinkOverlay>
      </Chakra.HStack>
    </Chakra.LinkBox>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>@tomchentw</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chakra.Container maxW="90ch" minH="100vh" py={12}>
        <Chakra.VStack as="article" spacing={[4, 8]}>
          <Chakra.Heading as="h1" w="full" size="2xl" textAlign="center">
            Tom Chen
          </Chakra.Heading>
          <Chakra.Text w="full" fontSize={["md", "lg"]} textAlign="center">
            Build awesome things and make software development more accessible.
          </Chakra.Text>
          <Chakra.SimpleGrid w="full" px={4} columns={[1, 2]} gap={[4, 8]}>
            {CARD_LIST.map((card) => (
              <Card key={card.url} card={card} />
            ))}
          </Chakra.SimpleGrid>
          <Chakra.Heading as="h2" w="full" size="xl">
            Proven Records
          </Chakra.Heading>
          <Chakra.List w="full" variant="unstyled" spacing={4}>
            {RECORD_LIST.map((record) => (
              <Chakra.ListItem key={record.url}>
                <Record record={record} />
              </Chakra.ListItem>
            ))}
          </Chakra.List>
          <Chakra.Text fontSize="sm" maxW="40ch" mx="auto">
            {`If you're unimpressed with my website it's because I'm too busy hanging out with my family, building awesome things, mentoring people JavaScript, and doing stuff for the community.`}
          </Chakra.Text>
        </Chakra.VStack>
        <Chakra.Box
          as="footer"
          borderTopWidth="1px"
          mt={[4, 8]}
          textAlign="center"
          p={4}
        >
          <Chakra.Link
            fontSize="sm"
            color="blue.500"
            href="https://github.com/tomchentw/tomchentw.com"
            isExternal
          >
            https://github.com/tomchentw/tomchentw.com
          </Chakra.Link>
        </Chakra.Box>
      </Chakra.Container>
    </React.Fragment>
  );
}
