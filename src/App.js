import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import StartQuiz from './components/StartQuiz';
import './App.css';

class App extends Component {

  constructor(props) { //setting initial states
    super(props);

    this.state = {
      isStarted: false,
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Dog: 0,
        Cat: 0,
        Bird: 0
      },
      result: '',
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this); //binding function
    this.handleStart = this.handleStart.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers)); //returning shuffled answers
    this.setState({
      question: quizQuestions[0].question, //setting question state to first question
      answerOptions: shuffledAnswerOptions[0] //setting answer state to shuffled answers of first question
    });
  }

  shuffleArray(array) { //shuffle function
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value); //setting the answer

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300); //setting up the next question
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);//getting the results
    }
  }

  setUserAnswer(answer) { //setting user answer and adding value
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (currentValue) => currentValue + 1 }
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() { //setting next question
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount); // returning dog, cat or bird
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount); //evaluating highest answer count
  }

  setResults(result) {
      this.setState({ result: result[0] });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }


  handleStart() {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted
    }));
  }

  handleRestart() {
    setTimeout(function () {
      location.reload()
    }, 100);
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result}
        handleRestart={this.handleRestart}
        img={this.state.result}
        title={this.state.result} />
    );
  }

  renderStart() {
    return (
      <StartQuiz handleStart={this.handleStart} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="container-header">
          <h1 className="App-title">Quiz: What type of animal are you?</h1>
          </div>
        </div>

        {this.state.isStarted === false ? this.renderStart() : this.state.result ? this.renderResult() : this.renderQuiz()}

      </div>
    );
  }

}

export default App;

