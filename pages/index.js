import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Room from "../components/Room";
import Team from "../components/Team";
import Second from "../components/Second";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
    <Head>
      <title>Home</title>
      <meta name="description" content="A Winnie Mandela site"/>

    </Head>
      <Header />
      <Intro />
      <About />
      <Room />
      <Team />
      <Second />
   
      <Footer />
    </div>
  );
}
