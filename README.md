# Stock-Ticker Microservice

[![Build Status](https://travis-ci.org/microapidev/stockTicker-api.svg?branch=develop)](https://travis-ci.org/microapidev/stockTicker-api) [![Coverage Status](https://coveralls.io/repos/github/microapidev/stockTicker-api/badge.svg?branch=develop)](https://coveralls.io/github/microapidev/stockTicker-api?branch=develop) ![Issues](https://img.shields.io/github/issues/microapidev/stockTicker-api) ![Forks](https://img.shields.io/github/forks/microapidev/stockTicker-api) ![MIT License](https://img.shields.io/github/license/microapidev/stockTicker-api)

A microservice to monitor the stock market, and reflect current market prices. 

- [How it Works](#how-it-works)
- [Getting Started](#getting-started)
- [Linting Your Code](#linting-your-code)
- [Testing Your Code](#testing-your-code)
- [Contributing Your Code](#contributing-your-code)
- [Endpoints Documentation](#endpoints-documentation)
- [Schema Design](#schema-design)

## How it works

## Getting Started

Ensure that your local machine has all the required software, listed below, before setting up your local environment.

### Requirements

- [Node](https://nodejs.org/en/download/)

### Setup Local Environment

You will first need to setup your local environment and ensure that all configuration files are correctly configured.

1. Fork the repo.
2. Clone your forked repo to you local environment.
3. In your terminal, run `npm install`.
4. In your terminal, run `cp .env.example .env`.
5. In your terminal, run `npm run dev`.

## Linting Your Code

1. Run `npm run lint:fix` to fix all fixable errors in source code and format with prettier
2. Run `npm run lint` to find errors that still remain in your code syntax/format
3. Ensure you fix any remaining linting errors displayed.
4. Run npm run `test:ci` to ensure your code matches the test

## Testing Your Code

1. Run `npm run test` to ensure your code passes all tests

## Contributing Your Code

Are you willing to contribute to this project? You can contribute in many areas but primarily in the following areas

1. Implementing endpoints and controllers
2. Writing unit tests for endpoints and controllers.
3. Documentation
4. Creating middleware and their consumables
5. Fixing/pointing out bugs


### Utility Functions

To facilitate consistent code, a few [Utility Functions](utils/README.md) have been provided and you should use them to send your responses to maintain consistent implementation.

### Before Submitting Pull Request

- Always lint and test your code as stated [above](#linting-your-code)

- Make use of the PR template and edit the placeholders with relevant information. PR descriptions must reference the issue number being fixed, e.g `fix #12` or `resolve #25`.

- Before pushing your commits, ensure your local/forked repo is synced with the latest updates from the original repo to avoid merge conflicts. You can safely do this with a fast-forwards merge.

```bash
git remote add upstream https://github.com/microapidev/stockTicker-api.git
git fetch upstream
git merge upstream/develop
git commit
git push origin <branch-name>
```

## Endpoints Documentation

Documentation will be provided with swagger soon.

## License

![MIT License](https://img.shields.io/github/license/microapidev/stockTicker-api)

Copyright (c) 2020, Team Justice League. All rights reserved.

