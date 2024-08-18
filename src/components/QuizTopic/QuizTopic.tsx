import data from "../../data.json";
import { Quiz, selectQuiz } from "../../redux/reducer/quiz.reducer";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizTopic.scss";
import { Button } from "../common/Button";
import { useDispatch } from "react-redux";

export const QuizTopic = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelectQuiz =
    (quiz: Quiz) => (e: SyntheticEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(selectQuiz(quiz));
      navigate(`/${quiz.title}`);
    };

  return (
    <div className="main-container-topics">
      <div className="welcome">
        <p className="title-ligth">Welcome to the</p>
        <p className="title-medium">Frontend Quiz!</p>
        <p className="label-topic">Pick a subject to get started.</p>
      </div>
      <div>
        {data.quizzes.map((quiz: Quiz) => {
          return (
            <Button key={quiz.title} onClick={handleSelectQuiz(quiz)}>
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "left",
                  gridTemplateColumns: "auto auto",
                  gap: "32px",
                }}
              >
                <div
                  className={`icon-wrapper ${quiz.title.toLocaleLowerCase()}`}
                >
                  <img src={new URL(quiz.icon, import.meta.url).href} />
                </div>
                <span className="quiz-topic-title">{quiz.title}</span>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
