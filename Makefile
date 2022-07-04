.PHONY: build up app seed down

COMPOSE := docker compose

build:
	$(COMPOSE) build

up:
	$(COMPOSE) up -d

app:
	cd app && make run

seed:
	cd app && make seed

test:
	cd app && make test

down:
	$(COMPOSE) kill
