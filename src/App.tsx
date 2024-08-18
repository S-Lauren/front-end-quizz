import "./App.css";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizTopic } from "./components/QuizTopic/QuizTopic";
import { Questions } from "./routes/questions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeQuizzes, QuizState } from "./redux/reducer/quiz.reducer";
import data from "./data.json";

function App() {
  const dispatch = useDispatch();
  const { quizzes }: any = useSelector((state: QuizState) => state.quizzes);
  console.log("state app", quizzes);
  useEffect(() => {
    if (quizzes.length === 0) {
      dispatch(initializeQuizzes({ quizzes: data.quizzes }));
    }
  }, [dispatch]);
  console.log("state app 2", quizzes);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizTopic />} />
        <Route path="/:title" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
