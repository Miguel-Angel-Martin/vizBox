FROM docker.avl.com/nginx:1.17-alpine
LABEL author="Andreas Juffinger<andreas.juffinger@avl.com>"

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/ /www/vizbox

# to serve locally in startup subdirectory
# COPY ./dist/ /www/vizbox/startup

CMD ["/bin/sh",  "-c",  "envsubst < /www/vizbox/assets/env.template.js > /www/vizbox/assets/env.js && exec nginx -g 'daemon off;'"]

ENV API_URL="https://vizbox.avl.com/api"

EXPOSE 8084

# to test, copy files from vizbox-client/dist to vizbox-client/docker/dist then build docker image
# docker build -t starterkit .

# docker run -p 80:8082 starterkit
# docker run --env API_URL="http://localhost:65435" -p 80:8082 starterkit