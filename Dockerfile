# Use node:18-alpine for a smaller image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies for Yarn
RUN apk add --no-cache yarn

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the app
COPY . .

# Build the Vite app for production
RUN yarn build

# Install a lightweight HTTP server for serving the static files
RUN yarn global add serve

# Expose the port for the frontend
EXPOSE 3000

RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
  && tar xzvf docker-17.04.0-ce.tgz \
  && mv docker/docker /usr/local/bin \
  && rm -r docker docker-17.04.0-ce.tgz

# Command to run the built frontend using the `serve` package
CMD ["serve", "-s", "dist", "-l", "3000"]
