# Start from a Debian image with the latest version of Go installed
# and a workspace (GOPATH) configured at /go.
FROM golang
MAINTAINER Andrew Cleland <andrew.cleland3@gmail.com>

ENV FMS_DB_HOST "localhost"
ENV FMS_DB_PORT 3306
ENV FMS_DB_USERNAME "root"
ENV FMS_DB_PASSWORD "secret123"
ENV FMS_DB_NAME "fms"
ENV FMS_SMTP_USERNAME "uqfloodmonitoring@gmail.com"
ENV FMS_SMTP_PASSWORD "neptune3801"
ENV FMS_SMTP_SERVER "smtp.gmail.com"
ENV FMS_SMTP_PORT 587
ENV FMS_SECRET_KEY "G8&JFt%@HKtp!jZAGT8gKGH^6FuE%*SQ"

# Copy the local package files to the container's workspace.
ADD . /go/src/github.com/aclel/deco3801/server

# Get dependencies
RUN cd /go/src/github.com/aclel/deco3801/server; go get

# Build the goserver command inside the container.
RUN go install github.com/aclel/deco3801/server

# Run the outyet command by default when the container starts.
ENTRYPOINT /go/bin/server

# Document that the service listens on port 8080.
#EXPOSE 8080 8081