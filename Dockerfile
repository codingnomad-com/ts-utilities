FROM node:14.17.3-alpine as build
ARG JFROG_TOKEN

WORKDIR /

COPY . /

RUN echo "registry=https://artifactory.mehrwerk.io/artifactory/api/npm/npm/" > .npmrc
RUN echo "always-auth=true" >> .npmrc
RUN echo "//artifactory.mehrwerk.io/artifactory/api/npm/npm/:_authToken=${JFROG_TOKEN}" >> .npmrc

RUN yarn --ignore-optional
RUN yarn build

EXPOSE 80

RUN echo "#!/bin/bash" > /entrypoint.sh \
    && echo "set -e" >> /entrypoint.sh
RUN chmod u+x /entrypoint.sh

CMD ["/entrypoint.sh"]