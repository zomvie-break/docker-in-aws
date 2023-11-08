FROM nginx:1.25.3-alpine

RUN rm -f /etc/nginx/config.d/default.conf

COPY ./conf.d/default.conf /etc/nginx/config.d/default.conf

RUN mkdir -p /home/app/staticfiles

CMD ["nginx", "-g", "daemon off;"]