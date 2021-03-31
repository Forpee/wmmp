import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Room from "../components/Room";
import Team from "../components/Team";
import Second from "../components/Second";
import Footer from "../components/Footer";
import useColor from '../hooks/useColor'
export default function Home() {
  const {isBlue, element, second} = useColor()
  return (
    <div>
    <Head>
      <title>Home</title>
      <meta name="description" content="A Winnie Mandela site"/>

    </Head>
      <Header blue ={isBlue}/>
      <Intro  />
      <About el={element} />
      <Room  />
      <Team sel={second}/>
      <Second  />
   
      <Footer />
    </div>
  );
}
