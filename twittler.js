$(document).ready(function(){
  	var $body = $('body');
  	var $tweetsBody = $('.tweetsBody');
  	var $header = $("#header");

    // $body.html('');

// Set up streams to appear on "refresh" button
      $("button").on("click", function(){
      	var index = streams.home.length - 1;
      	$tweetsBody.empty();
	      while(index >= 0){
	        var tweet = streams.home[index];
	        var $tweet = $('<div class="tweetSection"</div>');
	        var timeStamp = new Date();
	        var $timeStamp = $('<p class="tweetSection"></p>')
	        $tweet.text('@' + tweet.user + ': ' + tweet.message);
	        $timeStamp.text(timeStamp);
	      	$tweetsBody.append($tweet,$timeStamp);
	        index -= 1;
      	};
      });

// Set up individual user timelines
	var $individualTimelines = $('.individualTimelines')

	var $shawnDrostTimeline = $('<div id="shawnDrostTimeline"</div>');
	var $sharksforcheapTimeline = $('<div id="shawnDrostTimeline"</div>');
  	var $mracusTimeline = $('<div id="shawnDrostTimeline"</div>');
  	var $douglascalhounTimeline = $('<div id="shawnDrostTimeline"</div>');

	for (var i = 0; i<streams.users.shawndrost.length; i++) {
		$shawnDrostTimeline.text(streams.users.shawndrost[i].message)
	};

 	$individualTimelines.append($shawnDrostTimeline);



  	console.log(streams.users.shawndrost[0].message);


      });
