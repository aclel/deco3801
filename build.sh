#!/bin/bash

# Build and run data volume and mysql
sudo docker-compose -f databases-compose.yml build
sudo docker-compose -f databases-compose.yml up -d

sleep 10

# Build and run goserver, phpmyadmin and nginx
sudo docker-compose build
sudo docker-compose up -d

