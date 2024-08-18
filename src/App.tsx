import "./App.css";
import "./styles/main.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QuizTopic } from "./components/QuizTopic/QuizTopic";
import { Questions } from "./routes/questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizTopic />} />
        <Route path="/:title" element={<Questions />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
