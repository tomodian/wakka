FROM alpine:3.14

RUN apk update && \
    apk add --no-cache caddy && \
    rm -rf /var/cache/apk/*

COPY certs /certs
COPY caddy /etc/caddy
COPY run.sh /

WORKDIR /proxy

CMD ["/run.sh"]
