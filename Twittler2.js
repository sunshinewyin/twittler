$(document).ready(function(){

// sets original stream so it's there when page first loads

	var $tweetsBody = $('.tweetsBody');
		var index = streams.home.length-1;
		//empties the body of tweets so that tweets that have already been displayed are not duplicated
		$tweetsBody.empty();

			while (index>=0) {
				var tweet = streams.home[index];
				var $tweet = $('<div class="tweets"></div>');
				var time = moment(tweet.created_at).fromNow();
				$tweet.append("@" + '<span class="user">' + tweet.user + '</span>' + '<span class="message">' + ": " + tweet.message + '</span>' + '<br><span class="time">' + time + '</span>');
				$tweetsBody.append($tweet);
				index -=1;
			};

//function for refreshing feed
	var refreshTweets = function() {

		var $tweetsBody = $('.tweetsBody');
		var index = streams.home.length-1;
		$tweetsBody.empty();

			while (index>=0) {
				var tweet = streams.home[index];
				var $tweet = $('<div class="tweets"></div>');
				var time = moment(tweet.created_at).fromNow();
				$tweet.append("@" + '<span class="user">' + tweet.user + '</span>' + '<span class="message">' + ": " + tweet.message + '</span>' + '<br><span class="time">' + time + '</span>');
				$tweetsBody.append($tweet);
				index -=1;
			};
	};

//refreshes feed every 5 seconds
	setInterval(refreshTweets,5000);

// handler for displaying individual user timelines on click of username
	$(document.body).on("click", ".user", function(){

		var $individualTimeline = $('.individualTimeline');
		//fetches the username from the ".user" class
		var userName = $(this).text();

		$individualTimeline.empty();
		var index = streams.users[userName].length - 1;
		while(index >= 0) {
			var userTweets = streams.users[userName][index];
			var $userTweets = $('<div class="userTweets"></div>');
			var time = moment(userTweets.created_at).fromNow();
			$userTweets.append("@" + '<span class="user">' + userName + '</span>' + '<span class="message">' + ": " + userTweets.message + '</span>' + '<br><span class="time">' + time + '</span>');
			$individualTimeline.append($userTweets);
			index -=1;
		};
	});


});
