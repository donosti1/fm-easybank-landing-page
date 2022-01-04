import React from "react";
import {Image, Text, Stack, Container, Heading, Button, SimpleGrid} from "@chakra-ui/react";

interface IBenefits {
  id: number;
  iconUrl: string;
  title: string;
  lead: string;
}
const benefitsItems = [
  {
    id: 0,
    iconUrl: "online",
    title: "Online Banking",
    lead: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 1,
    iconUrl: "budgeting",
    title: "Simple Budgeting",
    lead: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 2,
    iconUrl: "onboarding",
    title: "Fast Onboarding",
    lead: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 3,
    iconUrl: "api",
    title: "Open API",
    lead: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const BenefitItem = (props: IBenefits) => {
  const imgSrc = `/assets/icon-${props.iconUrl}.svg`;

  return (
    <Stack alignItems={["center", "flex-start"]} spacing={[4, 6]}>
      <Image alt={props.title} h={20} src={imgSrc} w={20} />
      <Text color="primary.900" fontSize={["md", "lg"]}>
        {props.title}
      </Text>
      <Text color="primary.700" letterSpacing={["inherit", "-.4px"]} textAlign={["center", "left"]}>
        {props.lead}
      </Text>
    </Stack>
  );
};

const Gallery = () => {
  return (
    <SimpleGrid columns={[1, 4]} gap={[6, 8]}>
      {benefitsItems.map((mi) => (
        <BenefitItem key={mi.id} {...mi} />
      ))}
    </SimpleGrid>
  );
};

const Benefits: React.FC = () => {
  return (
    <>
      <Stack alignItems={["center", "flex-start"]} backgroundColor="primary.100" paddingY={[6, 16]}>
        <Container maxWidth="container.xl">
          <Stack spacing={[4, 6]} wrap="wrap">
            <Heading
              as="h2"
              fontSize={["3xl", "4xl"]}
              fontWeight="300"
              textAlign={["center", "left"]}
              width={["100%", "50%"]}
            >
              Why choose Easybank?
            </Heading>
            <Text
              color="primary.700"
              fontSize={["md", "lg"]}
              lineHeight={["inherit", "1.6"]}
              textAlign={["center", "left"]}
              width={["100%", "60%"]}
            >
              We leverage Open Banking to turn your bank account into your financial hub. Control
              your finances like never before.
            </Text>

            <Stack paddingTop={[6, 16]} width="100%">
              <Gallery />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Benefits;
