# App

NextJS app for Stripe integration demo.

## Setup

Configure `.env` if you like to try this app with your Stripe account.
It is **strongly** recommended to prepare a new Stripe account, to avoid this app pollutes your
running environment.

First, create `.env` file from an example.

    cp .env.development.example .env

Then, replace Stripe keys.

- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_**********`
- `STRIPE_SECRET_KEY=sk_test_**********`

## Commands

### Run

    make run

### Migrate

    make migrate

### Seed

    make seed

### Reset database

    make reset

### Test

    make test

### Lint

    make lint
