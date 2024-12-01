# Use the official Node.js image as the base image
FROM node:22.11.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

USER node

# Specify the command to start the Next.js app
CMD ["npm", "start"]
