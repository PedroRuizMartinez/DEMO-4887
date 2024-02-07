# Use official Node.js image as base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Java (dependency for openapi-generator-cli)
RUN apt-get update && apt-get install -y default-jre

# Copy the rest of the application code to the working directory
COPY . .

# Generate OpenAPI client
RUN npm run generate-client

# Build the React app
RUN npm run build

# Expose the port on which your React app will run
EXPOSE 3000

# Start the React app
CMD ["npm", "run", "dev"]
