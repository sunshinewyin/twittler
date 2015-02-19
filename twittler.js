$(document).ready(function(){
  	var $body = $('body');
  	var $tweetsBody = $('.tweetsBody');
  	var $header = $("#header");

  	var shawnDrostTimeline = streams.users.shawndrost;
  	var sharksforcheapTimeline = streams.users.sharksforcheap;
  	var mracusTimeline = streams.users.mracus;
  	var douglascalhounTimeline = streams.users.douglascalhoun;


    // $body.html('');

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






      });
