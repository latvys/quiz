import React from 'react';

function Question(props) {
    return (
        <h2 className="question">{props.content}</h2> //h2 element returned with props.content -> content={props.question} -> question={this.state.question}
    );
}

Question.propTypes = {
    content: React.PropTypes.string.isRequired
};

export default Question;