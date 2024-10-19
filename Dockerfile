FROM node:18 as build

USER root

RUN apt-get update && apt-get install -y docker.io

WORKDIR /app

COPY package.json yarn.lock  ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]







