.PHONY: init run

NODE := ./node_modules
BIN  := $(NODE)/.bin

ifeq ($(CONTEXT),)
PREFIX := docker compose exec app
endif

install:
	yarn

migrate: install
	$(PREFIX) npx prisma db push
	$(PREFIX) npx prisma generate

seed: install
	$(PREFIX) yarn ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seeds/index.ts

reset: install
	$(PREFIX) yarn ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/scripts/drop.ts
	$(MAKE) migrate
	$(MAKE) seed

run: migrate
	$(PREFIX) yarn dev

test:
	$(PREFIX) bash -c "NODE_ENV=test yarn jest --detectOpenHandles"

lint:
	$(PREFIX) yarn prettier --write .
