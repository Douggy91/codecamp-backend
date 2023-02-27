FROM node:14-alpine
COPY ./day17_mini-proj /node
WORKDIR /node/
EXPOSE 3000
RUN yarn install 
CMD [ "start:dev" ]
ENTRYPOINT [ "yarn" ]
