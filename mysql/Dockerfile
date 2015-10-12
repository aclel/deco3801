FROM mysql:5.6
MAINTAINER Andrew Cleland andrew.cleland3@gmail.com

ADD fms.sql /docker-entrypoint-initdb.d/fms.sql

# Command doesn't actually work, but the docker container stops
# which is what we want
CMD ["mysqld stop"]
