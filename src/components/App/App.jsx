import React, { Component } from 'react';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { GlobalStyles } from 'components/GlobalStyles';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      let newState = { ...prevState };
      for (const key in newState) {
        if (key === e.target.textContent) {
          newState[key] += 1;
        }
      }
      return newState;
    });
  };

  countTotalFeedback = () => {
    let value = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return value;
  };

  countPositiveFeedbackPercentage = () => {
    let value = 0;

    if (!this.state.good) {
      return 0;
    }

    value = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return Math.round((this.state.good * 100) / value);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <><GlobalStyles />
        <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container></>
       
     
    );
  }
}
