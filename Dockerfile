FROM nginx
MAINTAINER Andrew Cleland <andrew.cleland3@gmail.com>

RUN rm /etc/nginx/conf.d/default.conf
ADD nginx/nginx.conf /etc/nginx/nginx.conf
ADD nginx/nginx.crt /etc/nginx/ssl/nginx.crt
ADD nginx/nginx.key /etc/nginx/ssl/nginx.key
ADD nginx/waterwatcher.conf /etc/nginx/sites-enabled/waterwatcher.conf
COPY web_app /usr/share/nginx/html
CMD service nginx start

EXPOSE 80 443
