FROM ubuntu:14.04
MAINTAINER asyrique@gmail.com

RUN add-apt-repository -y ppa:chris-lea/node.js

RUN apt-get update

RUN apt-get install nodejs

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD["node", "/src/keystone.js"]
