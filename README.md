# quizzer-llm

---

# Description

This is an application using a LLM model to play a quizz.
The application is deployed and available [here](https://quizzer-llm.rael-calitro.ovh/)

- It uses the `ollama` package to communicate with the model.
- It uses the mistral:instruct model which is light enough to run on a CPU.
- It runs a node.js (Fastify) server to communicate with the model and a web client (React) to interact with the server.
- It uses a docker container to run the model.

# Features

- Prompt the model with a set of instructions
- Ask the model questions
- Analyze the answers of users by model
- Format the model's responses as JSON

# Prerequisites

- Docker
- Node.js v20+

# Environment variables

Be sure to set your .env files, one for API and one for UI.

You can find the documented example .env.example for both API and UI in their respective folders.

---

# Installation

- Clone the repository
- Run `docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama` to start the ollama server (or `docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama` for NVidia GPU usage which will improve performances by far, see Documentation section below)

If you want to run the application via docker, you can skip the next steps until the "Run the application" section.

- Run `npm install` to install the dependencies
- `npm install` can be run on the UI application and API server separately.

# Build the application

If you want to run the UI application and API server separately locally, you can skip this step

- Run `npm run build` to build the application

# Run the application

If you want to run the application via docker, you just have to run (with an `api/.env` file or `-e` settings):

- `docker build --build-arg REACT_APP_API_URL=http://localhost:3099/api -t quizzer-llm .`
- `docker run -d -p 3099:3099 --env-file api/.env --name quizzer-llm quizzer-llm`

Otherwise:

- Run `npm start` to start the application
- The application includes a .vscode configuration to run the application in debug mode.
- To start the UI application and API server separately, run `npm run start:ui` and `npm run start:api` respectively.

# Deployment

The public instance runs on the VPS at `https://quizzer-llm-apimodel.rael-calitro.ovh`, deployed with [Kamal 2](https://kamal-deploy.org) (`config/deploy.yml`) following the conventions of the platform repository `rael06/vps`. GitHub Actions (`.github/workflows/ci-cd.yml`) builds the image on every push and pull request, and on `main` sends it to the VPS through the SSH tunnel and switches `kamal-proxy` once `/api/health` answers: no downtime (sessions live in memory, so a deployment ends the open quizzes).

- **Image** (`Dockerfile`): `node:22-bookworm-slim`; the React UI is built with `REACT_APP_API_URL` (build argument set in `config/deploy.yml`), the API is bundled once with esbuild (`npm run bundle` in `api/`) and runs with `node dist/index.mjs` as the `node` user, read-only, with production dependencies only.
- **Settings**: the public deployment settings are fixed in `config/deploy.yml` (`ENVIRONMENT`, `HOST`, `PORT`, `HTTPS_CERTIFICATE=managed`, `USE_BASIC_AUTH=false`, `MODEL_COMMUNICATION_TYPE=api`, `CORS_ORIGINS`). The GitHub environment `production`, restricted to `main`, holds the variables `API_MODEL_NAME`, `API_MODEL_URL` and the secrets `API_MODEL_SECRET`, `KAMAL_SSH_KEY`, `VPS_HOST`, `VPS_SSH_PORT`, `VPS_KNOWN_HOSTS`.
- The repository variable `DEPLOY_ENABLED` (`true`/`false`) turns deployments on or off.
- Rollback: `kamal app containers -q` lists the versions kept on the VPS, `kamal rollback <version>` switches back (see `docs/runbooks/workstation.md` in `rael06/vps`).

---

# Documentations

- [Ollama](https://ollama.com/)
- [Ollama mistral models](https://ollama.ai/library/mistral)
- [Ollama mistral:instruct model](https://ollama.ai/library/mistral:instruct)
- [Ollama SDK](https://github.com/ollama/ollama-js)
- [Ollama and docker](https://ollama.ai/blog/ollama-is-now-available-as-an-official-docker-image)
- [Mistral:instruct model](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2)
- [Mistral models](https://docs.mistral.ai/models/)

When sharing your proof of concept (POC) project publicly, it's indeed wise to explain the scope, design choices, and any shortcuts you took. This context can help others understand your intentions, the project's purpose, and its limitations. Here's a suggestion for how you might draft that section of your README:

---

# Project Overview and Design Choices

This project serves as a proof of concept (POC) application around leveraging a Large Language Model (LLM) to power a quiz maker. It's designed to explore the capabilities of LLMs within a specific application context and to demonstrate a practical implementation.

### Key Design Choices:

- **Simplicity Over Complexity:** To maintain focus on the core functionality and ensure the codebase remains approachable, I've intentionally skipped implementing certain architectural patterns such as dependency injection or domain-driven design. Given the project's scope as a POC, these patterns were deemed unnecessary and could potentially obscure the learning objectives.

- **No DTO Mapper:** Objects in this project do not contain any sensitive information; therefore, a Data Transfer Object (DTO) mapper was not utilized. This decision was made to streamline the code and focus on the interaction with the LLM.

- **Testing:** Automated tests have been omitted. This project is not intended for production use, and its primary goal is exploratory. Including tests would increase complexity without significant benefits for the project's learning and demonstration goals.

### Project Intentions:

This POC was created in a short amount of time (couple of days on my free time) with two main objectives:

1. **Learning:** To gain hands-on experience with Large Language Models and understand how they can be integrated into application development.
2. **Sharing:** To contribute a simple, yet functional example of using LLMs within a software project to the community.

### Note on Production Readiness:

Please be aware that this project is not designed with production use in mind. It serves as an educational tool and a starting point for discussions and further experimentation. As such, certain best practices commonly associated with production-ready software (such as comprehensive testing and adherence to specific architectural principles) have been intentionally omitted to keep the focus on the core learning objectives.

### Feedback and Questions:

I welcome feedback and questions on this project! It's shared in the spirit of learning and collaboration. If you have any questions or suggestions, or if you'd like to discuss the project further, please feel free to contact me.

---

# Author

- Made with ❤️ by [Rael CALITRO](https://rael-calitro.ovh)
- [LinkedIn](https://www.linkedin.com/in/rael-calitro-4a519a187/)

---

# License

The MIT License (MIT)

Copyright (c) 2024 Rael CALITRO, Inc. and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
