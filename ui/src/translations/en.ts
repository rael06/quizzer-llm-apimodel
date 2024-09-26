import { Dictionary } from "./Dictionary";

export const enDictionary: Dictionary = {
  global: {
    error: "Sorry, an error has occurred, please try again later.",
    home: "Home",
  },
  header: {
    title: "Quizzer-llm",
    description:
      "A game using a self-hosted version of LLM Mistral AI 7B Instruct",
  },
  home: {
    input: {
      label: "Thematic",
      placeholder: "Enter a thematic",
    },
    defaultThematic: "general thematic",
    startQuizz: "Start the quiz",
    descriptions: [
      "Passionate about quizzes? Explore various themes here. In the absence of a thematic, a general quiz will be offered. Happy Quizzing! 🎉",

      "Caution: the questions are generated by a language model in approximate French or English and may not be accurate. They should not be considered a reliable source.",

      "Responsibility for the use of the site and the results generated cannot be engaged.",

      "The model's efficiency is remarkable and deserves to be shared; this efficiency is better in English than in French. Other LLM (Large Language Models), as Mixtral 8x7B, should be better, but the machine hosting this project is not powerful enough to support them, also, as the machine is not always available, the service may be interrupted.",

      "I've created this project in a short amount of time to learn and share. Feel free to check out the source code documentation. For any questions, contact me 😇.",
    ],
  },
  quizz: {
    score: "Score: ",
    error: {
      question:
        "Sorry, the generation of a valid question has failed, please proceed to the next question.",
      feedback:
        "Sorry, the generation of a valid feedback has failed, please proceed to the next question.",
    },
    action: {
      home: "Home",
      next: "Next",
    },
    answerInput: {
      input: {
        label: "Your custom answer",
        placeholder: "Enter your custom answer..",
      },
    },
  },
  footer: {
    author: "2024, by Rael CALITRO: ",
    license: "License: ",
    sourceCode: "Source code: ",
    modelSource: "Open source LLM AI model used from: ",
  },
};