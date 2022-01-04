import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

/* import Routes from "./routes"; */
import Footer from "./screens/Footer";
import Articles from "./screens/Articles";
import Main from "./screens/Main";
import Hero from "./screens/Hero";
import Benefits from "./screens/Benefits";
import Header from "./screens/components/Header";
/*     Request Invite      Request Invite  */
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
