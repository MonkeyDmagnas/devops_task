FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /bookstore
#second comment to confitm jenkins automation
COPY ./package*.json /bookstore

RUN npm install -g
RUN npm install react-scripts@latest

COPY . .
#comment added
CMD ["npm","start"]
