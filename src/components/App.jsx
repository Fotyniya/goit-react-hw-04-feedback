import { useState, useEffect, useRef } from "react";
import { GlobalStyle } from "../components/GlobalStyle";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Layout } from "../components/Layout"

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = useRef(0);
  let positivePercentage = useRef(0);

  const countFeedback = option =>{
    switch (option) {
      case 'good':
        setGood((prevState)=> prevState + 1);
        break;
      case 'neutral':
        setNeutral((prevState)=> prevState + 1);
        break;
      case 'bad':
        setBad((prevState)=> prevState + 1);
        break;    
      default: 
        return;
    }
  };

  useEffect(()=>{
    total.current = good + neutral + bad;
    positivePercentage.current = Math.round(good/total.current*100);
  },[good,neutral,bad]
  );

  return (
    <Layout>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions 
          options = {['good', 'neutral', 'bad']}
          onLeaveFeedback = { countFeedback }
        />
      </Section>
      
      <Section title={"Statistics"}> 
        <Statistics 
          good = { good }
          bad = { bad }
          neutral = { neutral }
          total = { total.current }
          positivePercentage = { positivePercentage.current }
        /> 
      </Section>
      <GlobalStyle/>
    </Layout>
  );
};
