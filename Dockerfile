FROM nginx
MAINTAINER Andrew Cleland <andrew.cleland3@gmail.com>

RUN rm /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/nginx.conf
ADD nginx.crt /etc/nginx/ssl/nginx.crt
ADD nginx.key /etc/nginx/ssl/nginx.key
ADD flounder.conf /etc/nginx/sites-enabled/flounder.conf
COPY web_app /usr/share/nginx/html
CMD service nginx start

EXPOSE 80 443
