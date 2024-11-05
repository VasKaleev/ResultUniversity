import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferenceSection from "./components/DifferenceSection";
import { Fragment, useState } from "react";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [visible, setVisible] = useState(true)
  const [tab, setTab] = useState('effect');
  // setTimeout(()=>{
  //   setVisible(false);
  // },3000)
  return (
    <Fragment>
      {visible && <Header />}
      <main>
       <IntroSection/> 
       <TabsSection  active={tab} onChange={(current)=>setTab(current)}/>
       
       {tab === 'main' && (
        <>
           <TeachingSection/>
           <DifferenceSection/>
        </>
       )}
      {tab === 'feedback' && <FeedbackSection />}
      {tab === 'effect' && <EffectSection />} 
      </main>
    </Fragment>
  );
}
