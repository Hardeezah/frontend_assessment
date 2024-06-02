import Image from "next/image";
import Hero from "./components/Hero";
import Container from "./components/Container";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <Container>
      <Hero/>
      <About/>
      <Services/>
    </Container>
    );
}
