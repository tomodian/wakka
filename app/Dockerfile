FROM node:16-alpine3.15

WORKDIR /app

COPY package.json yarn.lock .

RUN yarn

# Defaults to 0.0.0.0:3000.
CMD ["yarn", "dev"]
