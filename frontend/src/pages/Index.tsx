import Articles from "../components/index/articles";
import HeroSection from "../components/index/heroSection";
import News from "../components/index/news";

export default function Index() {
  return (
    <div>
      <HeroSection />
      <Articles />
      <News />
    </div>
  );
}
