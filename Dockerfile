# Install dependencies and build the common package
FROM node:20-alpine

ARG REACT_APP_API_URL

WORKDIR /app

COPY . .


ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3099