FROM mysql:5.6
MAINTAINER Andrew Cleland andrew.cleland3@gmail.com

ADD fms.sql /docker-entrypoint-initdb.d/fms.sql

CMD ["mysqld stop"]