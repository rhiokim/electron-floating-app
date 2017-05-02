# .seed-electron

[![CircleCI](https://circleci.com/gh/rhiokim/.seed.svg?style=svg)](https://circleci.com/gh/rhiokim/.seed) [![Coverage Status](https://coveralls.io/repos/github/rhiokim/.seed/badge.svg?branch=master)](https://coveralls.io/github/rhiokim/.seed?branch=master) [![Dependency Status](https://dependencyci.com/github/rhiokim/.seed/badge)](https://dependencyci.com/github/rhiokim/.seed)

## Features

- Use [Commitizen](https://github.com/commitizen/cz-cli) to produce commit message according to [AngularJS convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines)
- Support git hook `precommit` used to eslint and check type
- Support git hook `prepush` used to test your code and analysis test coverage
- Use [conventional-changelog](https://github.com/ajoslin/conventional-changelog) to generate `CHANGELOG.md`
- Support git hook `commitmsg` used to lint your [commit message](https://github.com/kentcdodds/validate-commit-msg)
- Use [eslint-pretty-formatter](https://github.com/sindresorhus/eslint-formatter-pretty) to show results for eslint
- Use [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/) for unit testing
- Use [Istanbul](https://istanbul.js.org/) to show test coverage
- Integrate [flowtype](http://flowtype.org) type system
- Integrated with [coveralls.io](https://coveralls.io/) to show result of test-coverage on online
- Integrated with [Circle CI](https://circleci.com) to run build & test continuously

## How to run

```
$ yarn
$ yarn start
```

## References
- To test
  - https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/
  - https://oceanware.wordpress.com/2016/08/10/easy-tdd-setup-for-nodejs-es6-mocha-chai-istanbul/
- To generate coverage report
  - with mocha - https://istanbul.js.org/docs/tutorials/mocha/
  - https://medium.com/@novemberborn/code-coverage-with-babel-istanbul-nyc-83b8c2f1093

## License
MIT
