FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
ENV PORT=80
CMD [ "node", "dist/main.js" ]
