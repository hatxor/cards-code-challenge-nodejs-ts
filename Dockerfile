FROM habilelabs/node-mongodb

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE 8080

CMD npm run start