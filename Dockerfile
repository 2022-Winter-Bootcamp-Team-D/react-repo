FROM node:18.4.0-alpine
USER root

WORKDIR /frontend

COPY . /frontend

RUN npm install
#RUN yarn --ignore-platform
COPY . ./

EXPOSE 3000

#RUN npm start
CMD ["npm", "start"]