import React, { Component } from 'react';
import { Container } from './App.styled';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from '../FeedbackOptions';
import { Section } from '../Section';
import { Notification } from '../Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodValue = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  addNeutralValue = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addBadValue = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(Number((good / (good + neutral + bad)) * 100));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalPercent = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveGoodFeedback={this.addGoodValue}
            onLeaveNeutralFeedback={this.addNeutralValue}
            onLeaveBadFeedback={this.addBadValue}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalPercent={totalPercent}
              totalFeedback={total}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
