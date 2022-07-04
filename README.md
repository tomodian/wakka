# README

Wakka is a single-tenancy demo app, created for JP_Stripes presentation.

Every code runs inside Docker container.

## Setup

Add these lines into your `/etc/hosts`.

    127.0.0.1 wakka.test

## Commands

### Build containers

    make build

### Start containers

This command will boot all containers.

    make up

Then, boot webapp (NextJS) in foreground.

    make app

If you prefer to insert seed data, do it in another terminal.

    make seed

Finally, visit <https://wakka.test>

### Stop containers

    make down
