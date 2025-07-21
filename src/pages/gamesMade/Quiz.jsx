import { useState, useEffect } from 'react';
import '../gamesMade/css/quiz.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function QuizGame() {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      const data = await response.json();
      const formatted = data.results.map((q) => {
        const options = [...q.incorrect_answers];
        const randomIndex = Math.floor(Math.random() * 4);
        options.splice(randomIndex, 0, q.correct_answer);
        return {
          question: q.question,
          options,
          answer: q.correct_answer,
        };
      });
      setQuizData(formatted);
    } catch (error) {
      console.error('Failed to fetch quiz data:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleOption = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === quizData[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
    fetchQuestions();
  };

  if (quizData.length === 0) {
    return (
      <div className="sg-page">
        <div className="sg-hero">
          <div className="sg-info">
            <h2>Loading Questions...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sg-page">
      <button className="gtav-back-btn" onClick={() => navigate('/game')}>
        <FaArrowLeft />
      </button>

      <div className="quiz-score-top">{score} / {quizData.length}</div>

      <div className="sg-hero">
        <div className="sg-info">
          <h1>Quiz Game</h1>
          <p className="sg-meta">Trivia | July 2025</p>

          {showScore ? (
            <>
              <p className="sg-desc">You scored {score} out of {quizData.length}</p>
              <button className="sg-play-btn" onClick={restartQuiz}>Restart Quiz</button>
            </>
          ) : (
            <>
              <h2 dangerouslySetInnerHTML={{ __html: quizData[current].question }}></h2>
              <ul className="quiz-options">
                {quizData[current].options.map((option, index) => (
                  <li
                    key={index}
                    className={`quiz-option ${selected
                      ? option === quizData[current].answer
                        ? 'correct'
                        : option === selected
                        ? 'wrong'
                        : ''
                      : ''
                    }`}
                    onClick={() => handleOption(option)}
                    dangerouslySetInnerHTML={{ __html: option }}
                  ></li>
                ))}
              </ul>
              {selected && (
                <button className="quizbtn" onClick={nextQuestion}>
                  Next
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
