import {
  AboutUs,
  Advantages,
  ContactUs,
  Hero,
  HowWeWork,
  Reviews,
  Services,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Advantages />
      <HowWeWork />
      <Reviews />
      <ContactUs />
    </main>
  );
}
