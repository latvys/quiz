import React from 'react';

function QuestionCount(props) {
    return (
        <div className="questionCount">
            {/*counter={props.questionId -> state}
                total={props.questionTotal} -> questionTotal={quizQuestions.length}*/}
            Question <span><strong>{props.counter}</strong></span> of <span><strong>{props.total}</strong></span> 
        </div>
    );
}

QuestionCount.propTypes = {
    counter: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired
};

export default QuestionCount;