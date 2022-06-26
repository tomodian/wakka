.PHONY: init run

NODE := ./node_modules
BIN  := $(NODE)/.bin

ifeq ($(CONTEXT),)
PREFIX := docker compose exec app
endif

migrate:
	$(PREFIX) npx prisma db push
	$(PREFIX) npx prisma generate

run: migrate
	$(PREFIX) yarn dev

test:
	$(PREFIX) yarn jest --detectOpenHandles

lint:
	$(PREFIX) yarn prettier --write .
