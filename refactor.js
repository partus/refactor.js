_ = require('underscore')
fs = require('fs')
// files = ['/home/user/dev/InSight-Multi-Modal/framework/client/views/otherViews/operational/operational.html']
regexp = /(Meteor.Texts)/g
function replacer(match){
  var args = Array.prototype.slice.call(arguments);
  var fullstr = args[args.length-1]
  var offset  = args[args.length-2]
  var parenthes = args.slice(1,arguments.length-2)
  console.log(" the parentheses " + parenthes[2])
  console.log(parenthes)
  return "Texts";
  // return parenthes[0]+parenthes[1]+parenthes[2]*2;
}
refactorfile =  function(file){
    fs.readFile(file, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      // data manipulation goes here
      var newData = data.replace(regexp,replacer);
      // console.log(newData)
      fs.writeFile(file, newData, function (err) {
        if (err) return console.error(err);
      });
    });  
  }

fs.readdir('/home/user',function(err,files){
  // console.log(files)
})


  "use strict";

  var walk = require('walk')
    , fs = require('fs')
    , options
    , walker
    ;

  options = {
    followLinks: false
    // directories with these keys will be skipped
  , filters: ["Temp", "_Temp"]
  };

  walker = walk.walk("/home/user/dev/multishop/helpers", options);

  walker.on("file", function (root, fileStats, next) {
    console.log(root,fileStats.name)
    refactorfile(root+'/'+fileStats.name)
      // doStuff
    next();

  });

  walker.on("errors", function (root, nodeStatsArray, next) {
    next();
  });

  walker.on("end", function () {
    console.log("all done");
  });
