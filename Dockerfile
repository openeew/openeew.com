FROM node:12-alpine
RUN apk add --update --no-cache yarn
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
CMD yarn run start --host 0.0.0.0
