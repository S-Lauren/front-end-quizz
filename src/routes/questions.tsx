import { Navigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectQuizByTitle } from "../redux/selectors/quiz.selectors";
import { addGoodAnswer } from "../redux/reducer/answer.reducer";

export const Questions = () => {
  const { title } = useParams();
  const quiz = useSelector(selectQuizByTitle(title));
  // state local
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState(quiz?.questions[0]);
  const [answer, setAnswer] = useState("");
  const [goodAnswerCount, setCountGoodAnswer] = useState(0);

  const btnRef = useRef(null);
  const dispatch = useDispatch();

  if (!quiz) {
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
        setCountGoodAnswer((prev) => {
          dispatch(addGoodAnswer({ count: prev + 1 }));
          return prev + 1;
        });
        setAnswer(opt);
      }
    },
    [questions, goodAnswerCount, answer]
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
                ref={btnRef}
                style={{
                  cursor: "pointer",
                  color: answer === opt ? "green" : "grey",
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
