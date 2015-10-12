#!/bin/bash

# Build and run data volume and mysql
docker-compose -f databases-compose.yml build
docker-compose -f databases-compose.yml up -d

sleep 10

# Build and run goserver, phpmyadmin and nginx
docker-compose build
docker-compose up -d

