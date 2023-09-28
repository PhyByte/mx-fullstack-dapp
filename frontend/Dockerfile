# ------------------------------------------------------------------------------
#               Dockerfile for generating the frontend Container
# ------------------------------------------------------------------------------

# Use the node image with Node.js 16
FROM node:16-alpine as build
# Set the working directory to /app
WORKDIR /app
# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./
# Install dependencies with npm ci
RUN npm ci 

# Set a default value for VITE_MVX_NETWORK, this will be used if the build argument is not passed
ARG VITE_MVX_NETWORK=devnet
# Set environment variable for production based on the build argument
ENV VITE_MVX_NETWORK=$VITE_MVX_NETWORK

# Copy the current directory contents into the Docker image
COPY . ./
# Build the app for production
RUN npm run build

# Use an official Nginx runtime as a production stage named "production environment"
FROM nginx:stable-alpine
# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# Replace with our own Nginx configuration file
COPY nginx/nginx.conf /etc/nginx/conf.d
# Copy built static files from build stage to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html
# Make port 80 available to the outside world
EXPOSE 80
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
