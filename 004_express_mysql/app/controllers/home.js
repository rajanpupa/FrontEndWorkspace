var db = require('orm').db,
  Article = db.models.article;

exports.index = function(req, res){
  Article.find( function(err, articles){
    if(err) throw new Error(err);
    res.render('home/index', {
      title: 'Generator-Express mvc tada ',
      articles: articles
    });
  });
};

exports.rest = function(req, res){
  Article.find(function(err, articles){
    if(err) throw new Error(err);
     res.send(articles);
  })
}

exports.rest.post = function(req, res){
  var article = req.body;
  console.log("request: " + article.toString());
  for(a in article){
    console.log("requestBody:" + a.toString());
  }
    
  var arr=[];
  arr.push(article);
  Article.create(arr, function(err, articles){
    if(err) throw new Error(err);
     res.send(article);
  })
}
