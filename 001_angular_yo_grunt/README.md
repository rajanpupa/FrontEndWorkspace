# 001-angular-yo-grunt

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Building the application

```
npm install -g yo grunt-cli bower

npm install -g generator-angular

npm install -g generator-karma

yo angular 
// select bootstrap, grunt

bower install angular-bootstrap --save

// to build
grunt 

// to run
grunt serve
```

* Issue with `grunt test`
```
npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev
```







## References
[Google Doc] (https://docs.google.com/document/d/1dHL3-O0jtMMBHtTYAB-3WWcDwNzCZwGoQUKkB_-W-Ek/edit)

[Tutorial1]  (https://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/)

[Angular-ui] (https://angular-ui.github.io/bootstrap/)
