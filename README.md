[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Dependencies](https://david-dm.org/ckarper/tedious-newrelic/status.svg)](https://david-dm.org/ckarper/tedious-newrelic)
[![Maintainability](https://api.codeclimate.com/v1/badges/07dab983a642bdd619f6/maintainability)](https://codeclimate.com/github/CKarper/tedious-newrelic/maintainability)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# tedious-newrelic

A very bare bones [New Relic instrumentation](http://newrelic.github.io/node-newrelic/docs/tutorial-Datastore-Simple.html) package for [tedious](https://github.com/tediousjs/tedious).

## Installation

`npm install tedious-newrelic`

## Usage

Start your node process by requireing this library at the command line.
```sh
node  -r "newrelic" -r "tedious-newrelic" "index.js"
```

## Disclaimer:
Your problems are not my problems. I instrumented the few calls I needed.
PRs welcome, discussion encouraged, but don't expect me to deal with your issues, 
even if this library caused them.
