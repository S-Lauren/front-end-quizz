import { Navigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectQuizByTitle } from "../redux/selectors/quiz.selectors";

export const Questions = () => {
  const { title } = useParams();
  const quiz = useSelector(selectQuizByTitle(title));

  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState(quiz?.questions[0]);
  const [goodAnswer, setGoodAnswer] = useState("");
  if (!quiz) {
    console.log("no");
    return <Navigate to="/" />;
  }

  useEffect(() => {
    setQuestions(quiz?.questions[count + 1]);
    if (quiz && count < quiz?.questions?.length - 1) {
      setTimeout(() => {
        setCount(count + 1);
      }, 10000);
    }
  }, [count, quiz?.questions, questions]);

  const handleResponse = useCallback(
    (opt: string) => () => {
      if (opt === questions?.answer) {
        setGoodAnswer(opt);
      }
    },
    [questions]
  );

  return (
    <div>
      <h1>{title}</h1>
      {!questions ? (
        <p>"Quiz terminé. Essayez un autre quiz."</p>
      ) : (
        <>
          <p>
            Question {count + 1} / {quiz?.questions.length}
          </p>
          <p>{questions.question}</p>
          <ul>
            {questions.options.map((opt: string) => (
              <button
                key={opt}
                style={{
                  cursor: "pointer",
                  color: goodAnswer === opt ? "green" : "red",
                }}
                onClick={handleResponse(opt)}
              >
                {opt}
              </button>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
