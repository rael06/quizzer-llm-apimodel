# Build and run the API
FROM node:20-alpine

WORKDIR /app

# Copy only the API files
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Install dependencies
RUN npm ci --only=production

# Expose the API port
EXPOSE 3099

# Start the API
CMD ["npm", "run", "start"]
