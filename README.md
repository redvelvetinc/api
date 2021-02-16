# RED API

This API manages and centralizes all the profiles and roles for our clients on different RED products.

## Development

You need to have Node.js and Yarn installed.

First create your `.env` file:

```sh
cp .env.example .env
```

Then replace variable `DATABASE_URI` with your actual MongoDB connection string;

To avoid installing MongoDB on your machine, you will use `docker-compose` instead:

```sh
docker-compose up -d
```

Finally install de dependencies and run the app on `development` mode:

```sh
yarn install
yarn develop
```

The app will run on `http://localhost:1337` and the first step will be create a new account.

## Middlewares

- GraphQL
- ~~Sentry~~ (5k errors)
- ~~Cloudinary~~ (25k Transformations + 25GB Storage)
- ~~Angolia~~ (10k requests/month)
- ~~SendGrid~~ (100 emails/day)
