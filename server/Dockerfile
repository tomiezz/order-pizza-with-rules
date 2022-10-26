FROM node:16-alpine as builder
WORKDIR /usr/src/backend
COPY . .
RUN yarn install
RUN yarn tsc

FROM node:16-alpine as runner
WORKDIR /usr/src/backend
COPY ./package.json  ./
COPY --from=builder ./usr/src/backend/www ./www
COPY --from=builder ./usr/src/backend/node_modules ./node_modules

CMD [ "yarn", "start" ]