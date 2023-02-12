FROM node:14-alpine

COPY . /nodejs/
WORKDIR /nodejs/
EXPOSE 3000
RUN yarn install

CMD ["dev"]
ENTRYPOINT ["yarn"]