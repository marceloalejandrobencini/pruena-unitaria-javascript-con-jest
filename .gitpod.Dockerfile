FROM gitpod/workspace-full

USER gitpod

RUN npm i jest@24.8.0 -g
RUN npm i @learnpack/learnpack@2.1.20 -g && learnpack plugins:install @learnpack/node@1.1.1
