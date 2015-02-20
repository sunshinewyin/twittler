$(document).ready(function(){
  	var $body = $('body');
  	var $tweetsBody = $('.tweetsBody');
  	var $header = $("#header");

	var $individualTimelines = $('.individualTimelines');


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

//display individual users' tweets
		$(".individualTimelines").on("click", "button", function(){

      	var index = streams.users.shawndrost.length - 1;
      	$individualTimelines.empty();
	      while(index >= 0){
	        var shawnDrostTweet = streams.users.shawndrost[index].message;
	        var $shawnDrostTimeline = $('<div class = "individualTimelines" id="shawnDrostTimeline"</div>');
	        // var timeCreated = streams.users.shawndrost[index].created_at;
	        // var $timeCreated = $('<p class="tweetSection"></p>')
	        $shawnDrostTimeline.text(shawnDrostTweet);
	        // $timeStamp.text(timeStamp);
	      	$individualTimelines.append($shawnDrostTimeline);
	        index -= 1;
      	};
      });

	// var $sharksforcheapTimeline = $('<div id="sharksforcheapTimeline"</div>');
 //  	var $mracusTimeline = $('<div id="mracusTimeline"</div>');
 //  	var $douglascalhounTimeline = $('<div id="douglascalhounTimeline"</div>');








	//why wouldn't for-loop work here
		// for (var i = 0; i<streams.users.shawndrost.length; i++) {
		// $shawnDrostTimeline.text(streams.users.shawndrost[i].message);
		// $individualTimelines.append($shawnDrostTimeline);
  //     	}

		// for (var i = 0; i<streams.users.sharksforcheap.length; i++) {
		// $sharksforcheapTimeline.text(streams.users.sharksforcheap[i].message);
		// $individualTimelines.append($sharksforcheapTimeline);
  //     	}
  //     	for (var i = 0; i<streams.users.mracus.length; i++) {
		// $mracusTimeline.text(streams.users.mracus[i].message);
		// $individualTimelines.append($mracusTimeline);
  //     	}

  //     	for (var i = 0; i<streams.users.douglascalhoun.length; i++) {
		// $douglascalhounTimeline.text(streams.users.douglascalhoun[i].message);
		// $individualTimelines.append($douglascalhounTimeline);
  //     	}

		// console.log($individualTimelines.text());




  });
