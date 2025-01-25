import Banner from "../components/home/banner";
// import Contact from "../components/contact";
import NewsLetter from "../components/home/newsLetter";
import Stats from "../components/home/stats";
import Steps from "../components/home/steps";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="max-w-[82rem] px-4 mx-auto mt-6 md:mt-10">
        <Steps />
        <Stats />
        {/* <Contact /> */}
        <NewsLetter />
      </div>
    </div>
  );
}
