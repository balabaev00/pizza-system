### Installation

#### Docker

```bash
$ docker-compose up -d
```

#### Application

```bash
# Simple
$ npm run start

# Development
$ npm run start:dev
```

App will be worked on localhost:3000/

#### ENV

Before start project you should create `.env` file. Look into `.env.template`.

#### Migrations

Migrations are require a **ormconfig.json** file, before run migrations command you should generate **ormconfig.json**

```bash
$ npm run ormconfig:generate
```

And now you can run migrations

```bash
# create a clear migration
$ npm run migration:create

# generate a migration
$ npm run migration:generate

# run all migrations
$ npm run migration:run
```
