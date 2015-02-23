$(document).ready(function(){

	var $tweetsBody = $('.tweetsBody');
		var index = streams.home.length-1;
		$tweetsBody.empty();

			while (index>=0) {
				var tweet = streams.home[index];
				var $tweet = $('<div class="tweets"></div>');
				$tweet.append("@" + '<span class="user">' + tweet.user + '</span>' + '<span class="message">' + ": " + tweet.message + '</span>' + '<br><span class="time">' + tweet.created_at + '</span>');
				$tweetsBody.append($tweet);
				index -=1;
			};


	var refreshTweets = function() {

		var $tweetsBody = $('.tweetsBody');
		var index = streams.home.length-1;
		$tweetsBody.empty();

			while (index>=0) {
				var tweet = streams.home[index];
				var $tweet = $('<div class="tweets"></div>');
				$tweet.append("@" + '<span class="user">' + tweet.user + '</span>' + '<span class="message">' + ": " + tweet.message + '</span>' + '<br><span class="time">' + tweet.created_at + '</span>');
				$tweetsBody.append($tweet);
				index -=1;
			};
	};

	setInterval(refreshTweets,5000);

	$(".user").on("click", function(){

		var $individualTimeline = $('.individualTimeline');
		$individualTimeline.remove();
		var userName = $(this).text();

		$individualTimeline.empty();

		var index = streams.users[userName].length - 1;
		while(index >= 0) {
			var userTweets = streams.users[userName][index];
			var $userTweets = $('<div class="userTweets"></div>');
			$userTweets.append("@" + '<span class="user">' + userName + '</span>' + '<span class="message">' + ": " + userTweets.message + '</span>' + '<br><span class="time">' + userTweets.created_at + '</span>');
			$individualTimeline.append($userTweets);
			index -=1;
		};
	});


});
