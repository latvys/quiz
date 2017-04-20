import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
    return (
        <ReactCSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}>
            <div className="result">
                {/*setting state of result*/}
                <h2 className="result-text">You have traits of a <strong>{props.quizResult}</strong>!</h2>
            <div><img className="result-image" src={'./images/' + props.img + '.jpg'} alt={props.title} /></div>
                <div>
                    <button className="btn" onClick={props.handleRestart}>Main menu</button>
                </div>
            </div>
        </ReactCSSTransitionGroup>
    );
}

Result.propTypes = {
    quizResult: React.PropTypes.string.isRequired,
    handleRestart: React.PropTypes.func.isRequired,
    img: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Result;