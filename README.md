# karma-graphql-preprocessor
[![Build Status](https://travis-ci.org/karma-runner/karma-html2js-preprocessor.png?branch=master)](https://travis-ci.org/karma-runner/karma-html2js-preprocessor)
> Preprocessor for converting GraphQL files into valid GraphQL queries.

*Note:* If you are using [AngularJS](http://angularjs.org/), check out [karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor).

## Installation

The easiest way is to keep `karma-html2js-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~1.7.0",
    "karma-graphql-preprocessor": "~1.0.0"
  }
}
```

You can simple do it by:
```bash
npm install karma-graphql-preprocessor --save-dev
```

or
```bash
yarn add karma-graphql-preprocessor --dev
```

## Configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.gql': ['graphql']
    },

    files: [
      '*.js',
      '*.gql'
    ],

  });
};
```

## How does it work ?

This preprocessor converts HTML files into JS strings and publishes them in the global `window.__html__`, so that you can use these for testing DOM operations.

For instance this `template.html`...
```html
<div>something</div>
```
... will be served as `template.html.js`:
```js
window.__html__ = window.__html__ || {};
window.__html__['template.html'] = '<div>something</div>';
```

See the [end2end test](https://github.com/karma-runner/integration-tests/blob/master/html2js/test.js) for a complete example.

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com