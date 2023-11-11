# react

FROM node:21.1.0-bookworm AS builder
WORKDIR /app
COPY ./demo/package.json /package.json
COPY ./demo/package-lock.json /package-lock.json
RUN npm ci
COPY . .
WORKDIR /app/demo
CMD ["npm", "run", "build"]
# CMD ["npm", "start"]