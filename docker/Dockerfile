FROM node:15.8.0-alpine3.10

#COPY ./compile /opt/bash
#RUN chmod 777 /opt/bash/getApp && \
#   ln -s /opt/bash/getApp /usr/bin

# Front-end (less & react) 
RUN apk upgrade && \
    npm install -g gulp && \
    npx create-react-app app && \
    cd /app && \
    npm init -y && \
    npm install --save-dev gulp && \
    npm install --save gulp-exec express gulp-less
WORKDIR /app
COPY ./public /app/public
COPY ./src /app/src

COPY ./compile/gulpfile.js .
RUN npm run build && \
    gulp

COPY ./server.js .
# Back-end (for Node.js)



