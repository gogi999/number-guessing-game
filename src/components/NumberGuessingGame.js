import React, { useState } from 'react';
import Explanation from './Explanation';
import GuessForm from './GuessForm';
import Result from './Result';
import RemainingAttempts from './RemainingAttempts';
import StartNewGameButton from './StartNewGameButton';

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const NumberGuessingGame = () => {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [guessCount, setGuessCount] = useState(1);
    const [userGuess, setUserGuess] = useState('');
    const [feedbackText, setFeedbackText] = useState('');
    const [previousGuesses, setPreviousGuesses] = useState([]);
    const [numberIsGuessed, setNumberIsGuessed] = useState(false);
    const [formIsDisabled, setFormIsDisabled] = useState(false);
    const [fieldError, setFieldError] = useState(false);
    const [attempts, setAttempts] = useState(10);

    const handleSubmit = (e) => {
        e.preventDefault();
        let userGuess = Number(e.target.userGuess.value);

        if (!userGuess || isNaN(userGuess)) {
            setFieldError(true);
            return;
        }

        if (userGuess > randomNumber && guessCount < 10) {
            setFeedbackText('UPS! The last guess was too high!');
        } else if (userGuess < randomNumber && guessCount < 10) {
            setFeedbackText('UPS! The last guess was too low!');
        } else if (userGuess === randomNumber && guessCount <= 10) {
            setFeedbackText(`Congratulations! You got it right! It took you ${guessCount} ${guessCount === 1 ? 'guess' : 'guesses'}!`);
            setNumberIsGuessed(true);
            setFormIsDisabled(true);
        } else {
            setFeedbackText(`GAME OVER! The correct number was ${randomNumber}!`);
            setFormIsDisabled(true);
        }

        setGuessCount(prevState => prevState + 1);
        setUserGuess('');
        setPreviousGuesses([...previousGuesses, userGuess]);
        setAttempts((prevState) => prevState - 1);

        e.target.reset();
    }

    const handleChange = (e) => {
        setUserGuess(e.target.value);
        setFieldError(false);
    }

    const handleClear = () => {
        setUserGuess('');
        setNumberIsGuessed(false);
        setFieldError(false);
    }

    const handleReset = () => {
        setRandomNumber(generateRandomNumber());
        setGuessCount(1);
        setUserGuess('');
        setPreviousGuesses([]);
        setNumberIsGuessed(false);
        setFormIsDisabled(false);
        setFieldError(false);
        setAttempts(10);
    }

    return (
        <main className="game__main-section">
            <Explanation />
            <GuessForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClear={handleClear}
                handleReset={handleReset}
                userGuess={userGuess}
                formIsDisabled={formIsDisabled}
                fieldError={fieldError}
            />
            <RemainingAttempts attempts={attempts} />
            {
                (previousGuesses.length === 0) ? null
                    : <Result
                        previousGuesses={previousGuesses}
                        numberIsGuessed={numberIsGuessed}
                        feedbackText={feedbackText}
                    />
            }
            {
                (!formIsDisabled) ? null : <StartNewGameButton handleReset={handleReset} />
            }
        </main>
    );
}

export default NumberGuessingGame;
