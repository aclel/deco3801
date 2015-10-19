:: Note, setx only works on >Win7. For Vista and earlier install Windows Resource Kit
:: All should be wrapped with quotes
::setx FMS_DB_HOST "localhost"
::setx FMS_DB_PORT "3306"
::setx FMS_DB_USERNAME "*"       :: Remember to replace this.
::setx FMS_DB_PASSWORD "*"       :: Remember to replace this.
::setx FMS_DB_NAME "fms"                  :: Remember to replace this as necessary.
::setx FMS_SMTP_USERNAME "*"     :: You will have created this.
::setx FMS_SMTP_PASSWORD "*"     :: You will have created this. 
::setx FMS_SMTP_SERVER "smtp.gmail.com"
::setx FMS_SMTP_PORT "587"
::setx FMS_PRIVATE_KEY "*"            :: Remember to replace this.
::setx FMS_PUBLIC_KEY "*"             :: Remember to replace this.
setx FMS_DB_PORT_3306_TCP_ADDR "localhost"
setx FMS_DB_PORT_3306_TCP_PORT "3306"
setx FMS_DB_USERNAME "deco3801"
setx FMS_DB_PASSWORD ""
setx FMS_DB_NAME ""
setx FMS_SECRET_KEY ""
setx FMS_SMTP_USERNAME "uqfloodmonitoring@gmail.com"
setx FMS_SMTP_PASSWORD ""
setx FMS_SMTP_SERVER "smtp.gmail.com"
setx FMS_SMTP_PORT 587