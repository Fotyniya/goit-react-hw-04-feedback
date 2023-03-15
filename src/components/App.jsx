import { useState } from "react";

import { Statistics } from "./Statistics/Statistics";
import { Feedback } from "./Feedback/Feedback";
import { Section } from "./Section/Section";
import { Layout } from "../components/Layout"

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = event =>{
    console.log(event.target.name);
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;    
      default: 
        return;
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = ()=>{
    return countTotalFeedback() ? Math.round(good/countTotalFeedback()*100) : 0;
  }

  return (
    <Layout>
      <Section title={"Please leave feedback"}>
        <Feedback 
          onLeaveFeedback = { countFeedback }
        />
      </Section>
      
      <Section title={"Statistics"}> 
        <Statistics 
          good = { good }
          bad = { bad }
          neutral = { neutral }
          total = { countTotalFeedback() }
          positivePercentage = { countPositiveFeedbackPercentage() }
        /> 
      </Section>
    </Layout>
  );
};
