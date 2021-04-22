FROM nginx:1.19.10-alpine
ADD frontend-production.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html/frontend/
EXPOSE 80
