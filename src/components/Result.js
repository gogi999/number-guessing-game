import PreviousGuessesList from './PreviousGuessesList';
import Feedback from './Feedback';

const Result = ({ previousGuesses, numberIsGuessed, feedbackText }) => {
    return (
        <section className="results">
            <PreviousGuessesList previousGuesses={previousGuesses} />
            <Feedback
                numberIsGuessed={numberIsGuessed}
                feedbackText={feedbackText}
            />
        </section>
    );
}

export default Result;