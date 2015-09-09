jQuery(document).ready(function($) {                                                                                                                                

var onCommand = function(term) {

  $('h1').html(term);

  new GoogleImageSearch(term).done(function (data) {

    $('body').css('background-image', 'url(' + data[0].url + ')');

  });

};

if (annyang) {

  // Let's define a command.
  var commands = {
    "(anything) *term": onCommand
/*    "let's look at *term": onCommand,
    "this is a *term": onCommand,
    "and *term": onCommand,
    "or *term": onCommand,
    "are *term": onCommand,
    "is *term": onCommand,
    "was *term": onCommand,
    "the *term": onCommand,
    "a *term": onCommand,
    "with *term": onCommand,
    "for *term": onCommand,
    "about *term": onCommand,
    "by *term": onCommand,
    "to *term": onCommand,
    "from *term": onCommand,
    "in *term": onCommand,
    "of *term": onCommand
*/
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start({continuous: true});
  annyang.debug();

  console.log('start');

}

});

/*
    var showFlickr = function(tag) {
      var url = '//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a828a6571bb4f0ff8890f7a386d61975&sort=interestingness-desc&per_page=9&format=json&callback=jsonFlickrApi&tags='+tag;
      $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonFlickrApi',
        contentType: "application/json",
        dataType: 'jsonp'
      });
    };
*/
