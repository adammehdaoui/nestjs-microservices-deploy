# Base image
FROM node:18

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3001

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
