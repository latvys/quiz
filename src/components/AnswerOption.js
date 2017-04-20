import React from 'react';

function AnswerOption(props) {
    return (
        <li className="answerOption">
            <input
                type="radio" //radio button
                className="radioCustomButton" //html class is radioCustomButton
                name="radioGroup" //group name for buttons
                checked={props.answerType === props.answer} //mapping checked answer with correct type
                id={props.answerType} //type id dog, cat, or bird
                value={props.answerType} //dog, cat or bird
                disabled={props.answer} // 
                onChange={props.onAnswerSelected} //checking for selected answers and showing next question or result
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {/*showing content*/}
                {props.answerContent}
            </label>
        </li>
    );
}

AnswerOption.propTypes = {
    answerType: React.PropTypes.string.isRequired,
    answerContent: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;