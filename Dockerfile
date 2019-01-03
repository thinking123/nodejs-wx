FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
VOLUME /app
EXPOSE 80
CMD npm run dev