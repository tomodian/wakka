.PHONY: init run

NODE := ./node_modules
BIN  := $(NODE)/.bin

ifeq ($(CONTEXT),)
PREFIX := docker compose exec app
endif

migrate:
	$(PREFIX) $(BIN)/prisma db push

run: migrate
	$(PREFIX) yarn dev
