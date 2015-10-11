FROM mysql:5.6
MAINTAINER Andrew Cleland andrew.cleland3@gmail.com

ADD mysql-start /usr/local/bin/
ADD mysql-firstrun /usr/local/bin/
ADD dump.sql /tmp/dump.sql

RUN chmod +x /usr/local/bin/mysql-start
RUN chmod +x /usr/local/bin/mysql-firstrun

CMD mysql-start