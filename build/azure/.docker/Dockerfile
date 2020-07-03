FROM node:12.10.0 as build-stage

WORKDIR /home/sprint-web

# NB: Only copy files that are required by 'npm install'
# The 'src' directory will be mounted as a shared volume by docker-compose (allowing for live-reload)
COPY angular.json /home/sprint-web/angular.json
COPY package.json /home/sprint-web/package.json
COPY package-lock.json /home/sprint-web/package-lock.json
COPY tsconfig.json /home/sprint-web/tsconfig.json
COPY tslint.json /home/sprint-web/tslint.json
COPY .docker/rm.optional.deps.js ./.docker/rm.optional.deps.js
COPY src /home/sprint-web/src
# before switching to non-root user, change ownership of home
RUN chown -R node:node .
USER node

# NB: this is a workaround due to the fact that npm '--no-optional' flag doesn't work (open script below for more)
RUN node .docker/rm.optional.deps.js

RUN npm install --no-optional
ARG configuration=prod
RUN npm run build -- --output-path=./dist/out --configuration $config


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.19
#Copy ci-dashboard-dist
COPY --from=build-stage /home/sprint-web/dist/out/ /usr/share/nginx/html
#Copy default nginx configuration
COPY ./.docker/nginx-custom.conf /etc/nginx/conf.d/default.conf