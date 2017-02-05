# 003_angular_node_express | yo

* Create a top level folder
* create two child folders `client` and `server`
* client folder is where all the angularjs stuff will be
* server folder is where all the nodejs and express will be
* The GruntFile.js setup in client will combine, minify, aggregate the styles,scripts and htmls in the /dist folder of server
* The server will use its /dist as the front end resources.
* The server will have its webservice endpoints as well served by express/nodejs controllers
* `yo angular` is used to generate the client project
* `express generator` is used for server.
* only the server folder needs to be deployed

### System Requirements

Before running the client and server, make sure you do the following

* In the server folder `npm install`
* In the client folder, before `grunt serve` or `grunt --force`, do the following
```
npm install
bower install

// also make sure ruby gem - compass is installed
gem install compass
```

### References

[http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/](Part 1)
[http://start.jcolemorrison.com/building-an-angular-and-express-app-part-2/](Part 2)
[http://start.jcolemorrison.com/building-an-angular-and-express-app-part-3/](Part 3)

