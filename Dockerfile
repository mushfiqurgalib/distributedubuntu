FROM nginx:latest
WORKDIR /var/www/html
# RUN npm run build --prod
COPY ./client/dist/ . 
COPY ./nginx.conf /etc/nginx/conf.d/default.conf