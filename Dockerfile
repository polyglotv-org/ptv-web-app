FROM node:9.11.1-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN npm install --global simple-server

COPY . .
RUN yarn build
CMD ["simple-server","build","3000"]