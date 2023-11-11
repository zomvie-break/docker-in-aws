FROM nginx:1.25.3-alpine
RUN rm -f /etc/nginx/config.d/default.conf
COPY ./conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY ./build /app/demo/build

CMD ["nginx", "-g", "daemon off;"]