const Feedback = ({ numberIsGuessed, feedbackText }) => {
    return <p className={`results__feedback ${numberIsGuessed ? 'results__feedback--correct'
        : 'results__feedback--incorrect'}`}>{feedbackText}</p>;
}

export default Feedback;
