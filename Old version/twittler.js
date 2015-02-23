$(document).ready(function(){
  	var $body = $('body');
  	var $tweetsBody = $('.tweetsBody');
  	var $header = $("#header");

  	var $shawndrosttimeline = $('#shawndrosttimeline');
  	var $sharksforcheaptimeline = $('#sharksforcheaptimeline');
  	var $mracustimeline = $('#mracustimeline');
  	var $douglascalhountimeline = $('#douglascalhountimeline');

  	var $shawndrostlink = $()

// Set up streams to appear on "refresh" button
    $("#refreshtweetsbutton").on("click", function(){
      	var index = streams.home.length - 1;
      	$tweetsBody.empty();

	    while(index >= 0){
	        var tweet = streams.home[index];
	        var $tweet = $('<div id="tweetSection" class="allTweets"></div>');
	        var timeStamp = new Date();
	        var $timeStamp = $('<div id="timeStamp" class="allTweets"></div>');
	        $tweet.text('@' + tweet.user + ': ' + tweet.message);
	        $timeStamp.text(timeStamp);
	        $tweet.append($timeStamp);
	      	$tweetsBody.append($tweet);
	        index -= 1;
      	};
      });

//display individual users' tweets
	$("#shawndrosttweets").on("click", function(){
      	var index = streams.users.shawndrost.length - 1;
      	$shawndrosttimeline.empty();
	    while(index >= 0){
	      	var shawndrosttweets = streams.users.shawndrost[index].message;
	      	var $shawndrosttweets = $('<div id = "shawndrosttimeline"></div>');
	        var timeCreated = streams.users.shawndrost[index].created_at;
	        var $timeCreated = $('<p id="shawndrosttimeline"></p>')
	        $shawndrosttimeline.text(shawndrosttweets);
	        $timeCreated.text(timeCreated);
	      	$shawndrosttimeline.append($shawndrosttweets, $timeCreated);
	        index -= 1;
      	};
      });

	$("#sharksforcheaptweets").on("click", function(){
      	var index = streams.users.sharksforcheap.length - 1;
      	$sharksforcheaptimeline.empty();
	    while(index >= 0){
	      	var sharksforcheaptweets = streams.users.sharksforcheap[index].message;
	      	var $sharksforcheaptweets = $('<div id = "sharksforcheaptimeline"></div>');
	        var timeCreated = streams.users.sharksforcheap[index].created_at;
	        var $timeCreated = $('<p id="sharksforcheaptimeline"></p>')
	        $sharksforcheaptweets.text(sharksforcheaptweets);
	        $timeCreated.text(timeCreated);
	      	$sharksforcheaptimeline.append($sharksforcheaptweets, $timeCreated);
	        index -= 1;
      	};
      });

	// $("#shawndrosttweets").on("click", function(){
 //      	var index = streams.users.shawndrost.length - 1;
 //      	$userTweets.empty();
	//     while(index >= 0){
	//       	var shawndrosttweet = streams.users.shawndrost[index].message;
	//       	var $shawndrosttimeline = $('<div id = "shawndrosttimeline"></div>');
	//         var timeCreated = streams.users.shawndrost[index].created_at;
	//         var $timeCreated = $('<p id="shawndrosttimeline"></p>')
	//         $shawndrosttimeline.text(shawndrosttweet);
	//         $timeCreated.text(timeCreated);
	//       	$userTweets.append($shawndrosttimeline, $timeCreated);
	//         index -= 1;
 //      	};
 //      });

	// $("#shawndrosttweets").on("click", function(){
 //      	var index = streams.users.shawndrost.length - 1;
 //      	$userTweets.empty();
	//     while(index >= 0){
	//       	var shawndrosttweet = streams.users.shawndrost[index].message;
	//       	var $shawndrosttimeline = $('<div id = "shawndrosttimeline"></div>');
	//         var timeCreated = streams.users.shawndrost[index].created_at;
	//         var $timeCreated = $('<p id="shawndrosttimeline"></p>')
	//         $shawndrosttimeline.text(shawndrosttweet);
	//         $timeCreated.text(timeCreated);
	//       	$userTweets.append($shawndrosttimeline, $timeCreated);
	//         index -= 1;
 //      	};
 //      });

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
