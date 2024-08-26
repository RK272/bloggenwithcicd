# Use the official Node.js image as the base image
FROM node:16 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a smaller image to serve the built React app
FROM node:16-alpine

# Install http-server to serve the build
RUN npm install -g http-server

# Set the working directory
WORKDIR /app

# Copy the build from the previous stage
COPY --from=build /app/build .

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["http-server", "-p", "8080"]
