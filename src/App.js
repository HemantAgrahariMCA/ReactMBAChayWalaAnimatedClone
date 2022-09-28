
import IntroVideo from "../src/components/IntroVideo.jsx";
import Section from "../src/components/Section.jsx";
import data from "./data/data.json";

import '../src/style/IntroVideo.scss'
import "../src/style/App.scss";
import "../src/style/section.scss";

import freshTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
function App() {

  return (
    <>
      <IntroVideo />
      <Section h3={'he'} imgSrc={freshTopicImg} btnTxt={'h'} text={'hello'} />
    </>
  );
}

export default App;
