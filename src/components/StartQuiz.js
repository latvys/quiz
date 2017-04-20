import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function StartQuiz(props) {
    return (
        <ReactCSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
            <div className="startQuiz">
                <h2>Find out which type of animal you are!</h2>
                <button className="btn" onClick={props.handleStart}>Start the quiz!</button>
            </div>
        </ReactCSSTransitionGroup>
    );
}

StartQuiz.propTypes = {
    handleStart: React.PropTypes.func.isRequired
};

export default StartQuiz;