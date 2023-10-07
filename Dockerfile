# Use an official Nginx runtime as the base image
FROM nginx:latest

# Copy your project files into the Nginx web root directory
COPY . /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]