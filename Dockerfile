FROM node:14.16.1-alpine3.10 as build
COPY . /myfrontend
WORKDIR /myfrontend
RUN npm install
ARG BACKEND_URL
ENV VUE_APP_BACKEND_URL $BACKEND_URL
RUN npm run build

FROM nginx:1.19.10-alpine
ADD frontend-production.conf /etc/nginx/conf.d/default.conf
COPY --from=build /myfrontend/dist /usr/share/nginx/html/frontend/
EXPOSE 80
