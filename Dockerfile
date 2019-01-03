FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
VOLUME /app
EXPOSE 80
CMD npm run dev