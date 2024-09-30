import { Dictionary } from "./Dictionary";

export const frDictionary: Dictionary = {
  global: {
    error: "Désolé, une erreur est survenue, veuillez réessayer plus tard.",
    home: "Accueil",
  },
  header: {
    title: "Quizzer-llm-via-api",
    description: "Un jeu utilisant le model GPT 4o mini de OpenAI",
  },
  home: {
    input: {
      label: "Thématique",
      placeholder: "Entrez une thématique",
    },
    defaultThematic: "thématique général",
    startQuizz: "Commencer le quizz",
    descriptions: [
      "Passionné de quizz ? Explorez diverses thématiques ici. En l'absence de choix, un quizz général sera proposé. Bon Quizz ! 🎉",

      "Attention : les questions sont générées par un modèle de langage dans un langage français ou anglais approximatif et peuvent ne pas être exactes. Elles ne doivent pas être considérées comme une source fiable.",

      "La responsabilité de l'utilisation du site et des résultats générés ne peut être engagée.",

      "Le model LLM est GPT 4o mini distribué par OpenAI.",

      "J'ai créé ce projet en peu de temps pour apprendre et partager. N'hésitez pas à consulter la documentation du code source. Pour toute question, contactez-moi 😇.",
    ],
  },
  quizz: {
    score: "Score : ",
    error: {
      question:
        "Désolé, la génération de question valide a echoué, veuillez passer à la question suivante.",
      feedback:
        "Désolé, la génération de feedback valide a echoué, veuillez passer à la question suivante.",
    },
    action: {
      home: "Accueil",
      next: "Suivante",
    },
    answerInput: {
      input: {
        label: "Votre réponse personnalisée",
        placeholder: "Entrez votre réponse personnalisée..",
      },
    },
  },
  footer: {
    author: "2024, par Rael CALITRO : ",
    license: "License : ",
    sourceCode: "Code source : ",
    modelSource: "Source du modèle IA LLM : ",
  },
};
