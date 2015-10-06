:: Note, setx only works on >Win7. For Vista and earlier install Windows Resource Kit
:: All should be wrapped with quotes
setx FMS_DB_HOST "localhost"
setx FMS_DB_PORT "3306"
setx FMS_DB_USERNAME "<username>"       :: Remember to replace this.
setx FMS_DB_PASSWORD "<password>"       :: Remember to replace this.
setx FMS_DB_NAME "fms"                  :: Remember to replace this as necessary.
setx FMS_SMTP_USERNAME "<username>"     :: You will have created this.
setx FMS_SMTP_PASSWORD "<password>"     :: You will have created this. 
setx FMS_SMTP_SERVER "smtp.gmail.com"
setx FMS_SMTP_PORT "587"
setx FMS_PRIVATE_KEY "<key>"            :: Remember to replace this.
setx FMS_PUBLIC_KEY "<key>"             :: Remember to replace this.