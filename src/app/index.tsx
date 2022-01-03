import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

/* import Routes from "./routes"; */
import Footer from "./screens/Footer";
import Articles from "./screens/Articles";
import Main from "./screens/Main";
import Hero from "./screens/Hero";
/*   Home About Contact Blog Careers Request Invite Next generation digital banking Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more. Request Invite Why choose Easybank? We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before. Online Banking Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. Simple Budgeting See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. Fast Onboarding We don’t do branches. Open your account in minutes online and start taking control of your finances right away. Open API Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.     Request Invite  */
const App: React.FC = () => {
  return (
    <>
      {/* <Hero />
      <Main />*/}
      <Articles />
      <Footer />
    </>
  );
};

export default App;
