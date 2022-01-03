import React from "react";
import {Image, Text, Stack, Container, Heading, Button, SimpleGrid} from "@chakra-ui/react";

interface IArticles {
  id: number;
  img: string;
  author: string;
  title: string;
  lead: string;
}
const articlesItems = [
  {
    id: 0,
    img: "currency",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    lead: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
  },
  {
    id: 1,
    img: "restaurant",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    lead: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 2,
    img: "plane",
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    lead: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 3,
    img: "confetti",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    lead: "After a lot of hard work  the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

const ArticleItem = (props: IArticles) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const imgSrc = `url(/assets/image-${props.img}.jpg)`;

  return (
    <Stack backgroundColor="white" borderRadius="md">
      <Stack
        _hover={{
          cursor: "pointer",
        }}
        backgroundImage={imgSrc}
        backgroundPosition={["50%  50%", "50%  50%"]}
        backgroundRepeat={["no-repeat", "no-repeat"]}
        backgroundSize={["100% 100%", isHover ? "110% auto" : "100% auto"]}
        borderTopRadius="md"
        height={32}
        transition="all .3s linear"
        onMouseEnter={() => setIsHover(!isHover)}
        onMouseLeave={() => setIsHover(!isHover)}
      />
      <Stack padding={[4, 4]}>
        <Text color="primary.700" fontSize={["sm", "xs"]}>
          By {props.author}
        </Text>
        <Text _hover={{cursor: "pointer", color: "primary.500"}} color="primary.900">
          {props.title}
        </Text>
        <Text color="primary.700" fontSize={["sm", "xs"]}>
          {props.lead}
        </Text>
      </Stack>
    </Stack>
  );
};

const Gallery = () => {
  return (
    <SimpleGrid columns={[1, 4]} gap={[6, 8]}>
      {articlesItems.map((mi) => (
        <ArticleItem key={mi.id} {...mi} />
      ))}
    </SimpleGrid>
  );
};

const Articles: React.FC = () => {
  return (
    <>
      <Stack alignItems={["center", "flex-start"]} backgroundColor="primary.50">
        <Container maxWidth="container.xl">
          <Stack direction={["column", "row"]} spacing={0} wrap="wrap">
            <Heading
              as="h2"
              fontSize={["2xl", "5xl"]}
              fontWeight="300"
              textAlign={["center", "left"]}
              width={["100%", "50%"]}
            >
              Latest Articles
            </Heading>

            <Stack paddingTop={[6, 16]} width="100%">
              <Gallery />
            </Stack>
          </Stack>
        </Container>
        <Stack h={[16, 32]} />
      </Stack>
    </>
  );
};

export default Articles;
