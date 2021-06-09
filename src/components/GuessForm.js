const GuessField = ({
    userGuess,
    handleSubmit,
    handleChange,
    handleClear,
    handleReset,
    formIsDisabled,
    fieldError
}) => {
    return (
        <form className="guess-form" onSubmit={handleSubmit}>
            <input
                type="number"
                min="1"
                max="100"
                name="userGuess"
                onChange={handleChange}
                value={userGuess}
                disabled={formIsDisabled}
                className="guess-form__input"
            />
            {fieldError && (
                <div className="field-err">
                    <label>Type a valid number</label>
                </div>
            )}
            <button
                type="submit"
                className={`guess-form__button ${(formIsDisabled) && 'guess-form__button--disabled'}`}
                disabled={formIsDisabled}
            >
                Submit number
            </button>
            <button
                type="button"
                className="guess-form__button"
                onClick={handleClear}
            >
                Clear
            </button>
            <button
                type="button"
                className="guess-form__button"
                onClick={handleReset}
            >
                Reset
            </button>
        </form>
    );
}

export default GuessField;