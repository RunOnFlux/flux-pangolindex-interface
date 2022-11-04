FROM node:16.14.0 as build

WORKDIR /app

COPY . .

RUN npm install -g npm@8.10.0

RUN yarn
RUN yarn build

FROM node:16.14.0-alpine

WORKDIR /app

COPY --from=build /app/build ./build

RUN yarn global add serve

EXPOSE 3000

CMD serve -s build
