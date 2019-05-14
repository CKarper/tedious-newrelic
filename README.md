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
