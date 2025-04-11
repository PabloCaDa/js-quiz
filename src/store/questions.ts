import { create } from "zustand";
import { Question } from "../types";
import { persist } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,

      fetchQuestions: async (limit: number) => {
        const response = await fetch("http://localhost:5173/data.json");
        const json = await response.json();

        const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
        set({ questions });
      },

      selectAnswer: async (questionId: number, answerIndex: number) => {
        set((state) => {
          const questionIndex = state.questions.findIndex(
            (question) => question.id === questionId
          );

          const questionInfo = state.questions[questionIndex];
          const isCorrectUserAnswer =
            questionInfo.correctAnswer === answerIndex;

          const newQuestions = structuredClone(state.questions);

          newQuestions[questionIndex] = {
            ...questionInfo,
            isCorrectUserAnswer,
            userSelectedAnswer: answerIndex,
          };

          return { questions: newQuestions };
        });
      },

      goNextQuestion: () => {
        const { currentQuestion, questions } = get();
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion });
        }
      },

      goPreviousQuestion: () => {
        const { currentQuestion } = get();
        const prevQuestion = currentQuestion - 1;

        if (prevQuestion >= 0) {
          set({ currentQuestion: prevQuestion });
        }
      },
      reset: () => {
        set({ currentQuestion: 0, questions: [] });
      },
    }),
    { name: "questions" }
  )
);
