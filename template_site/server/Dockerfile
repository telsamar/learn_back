FROM node:latest
WORKDIR / 
COPY ["package.json", "./"] /apiserver
RUN npm install
COPY . /apiserver
EXPOSE 3030
CMD [ "node", "server.js" ]

