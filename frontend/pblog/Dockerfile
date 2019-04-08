FROM node:10.15.3-alpine as build-stage
ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm --registry https://registry.npm.taobao.org install -g yarn
RUN yarn install
RUN yarn build

# production stage
FROM nginx:latest
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
WORKDIR /usr/src/app
RUN chmod -R 755 /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
