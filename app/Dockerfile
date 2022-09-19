# Do not use Alpine Linux here, causes Apple Silicon compatibility issue on Prisma.
FROM node:16-slim

# Install utilities.
# Also contains a workaround to run Prisma on ARM platform.
# https://github.com/prisma/prisma/issues/861#issuecomment-881992292
RUN apt-get -y update && \
    apt-get -y install \
      make \
      openssl && \
    apt-get clean

WORKDIR /app

COPY Makefile package.json yarn.lock .

RUN make install

ENV CONTEXT=docker

CMD ["sleep", "infinity"]
