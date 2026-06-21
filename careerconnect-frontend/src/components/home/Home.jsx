import Hero from "./Hero";
import FeaturedJobs from "./FeaturedJobs";
import Statistics from "./Statistics";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedJobs />
      <Statistics />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;