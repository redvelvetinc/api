# Create image based on the official Node image from the dockerhub
FROM node:alpine

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Add project
ADD . /app

# Install globally dependecies
RUN npm i -g yarn
RUN npm i -g pm2

# Install dependecies
RUN yarn install

# Build TS files
RUN yarn build

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD yarn start
