# Stage 1: Build the Angular application
FROM node:18 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.19
COPY --from=build /app/dist/user-account /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
