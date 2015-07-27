var app = require('ballroom');
var rc = require('rhoconnect_helpers');
app.controllerName('CustomRoutes');

app.post('/testpost', {}, function(req,resp){
  console.log("testpost hit ...");
  console.log(req.userName);
  console.log(req.password);
  console.log(JSON.stringify(req));
  resp.send(
    JSON.stringify({'status': 'ok', 'username': req.params.userName, 'password': req.params.password})
  );
});