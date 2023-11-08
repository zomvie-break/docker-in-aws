FROM node:21.1.0-bookworm

WORKDIR /app

COPY ./demo/package.json /app/package.json
COPY ./demo/package-lock.json /app/package-lock.json

RUN node ci

COPY ./demo /app

CMD ["npm", "start"]