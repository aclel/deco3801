#!/bin/bash
# Note, bash must be setup to run ~/.bash_profile on startup. (It does this by default).
echo 'export FMS_DB_HOST="localhost"' >> $HOME/.bash_profile
echo 'export FMS_DB_PORT="3306"' >> $HOME/.bash_profile
echo 'export FMS_DB_USERNAME="<username>"' >> $HOME/.bash_profile   # Remember to replace this.
echo 'export FMS_DB_PASSWORD="<password>"' >> $HOME/.bash_profile   # Remember to replace this.
echo 'export FMS_DB_NAME="<dbname>"' >> $HOME/.bash_profile         # Remember to replace this as necessary.
echo 'export FMS_SMTP_USERNAME="<username>"' >> $HOME/.bash_profile # You will have created this.
echo 'export FMS_SMTP_PASSWORD="<password>"' >> $HOME/.bash_profile # You will have created this. 
echo 'export FMS_SMTP_SERVER="smtp.gmail.com"' >> $HOME/.bash_profile
echo 'export FMS_SMTP_PORT="587"' >> $HOME/.bash_profile
echo 'export FMS_PRIVATE_KEY="<key>"' >> $HOME/.bash_profile        # Remember to replace this.
echo 'export FMS_PUBLIC_KEY="<key>"'  >> $HOME/.bash_profile        # Remember to replace this.