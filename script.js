/* #6 start the #external #action and say hello */
console.log("App is alive");

var currentChannel;
currentChannel = sevencontinents;

var currentLocation = {
	latitude: 52.267701,
	longitude: 10.5384825,
	what3words:"gelbes.beinen.freudige"
}

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelObject) {
	//Log the channel switch
	console.log("Tuning in to channel", channelObject);

	//Write the new channel to the right app bar
	document.getElementById('channel-name').innerHTML = channelObject.name;

	//#6 change the #channel #location
	document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

	/*Set app-bar-star according to selected channel*/
	$('#channel-star i').removeClass('fa-star fa-star-o');
	//#chlob-trn: ...second, we add the correct one
	$('#channel-star i').addClass(channelObject.starred ? 'fa-star' : 'fa-star-o');


	/* #6 #highlight the selected #channel.
	   This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
	$('#channels li').removeClass('selected');
	$('#channels li:contains(' + channelObject.name + ')').addClass('selected');

	currentChannel = channelObject;
}

/* #6 #liking a channel on #click */
function star() {
	$('#channel-star i').toggleClass('fa-star');
	$('#channel-star i').toggleClass('fa-star-o');


	/*set app-bar-star according to selected channel*/
	currentChannel.starred = !currentChannel.starred;

	// #star #lst: toggle star also in list
	$('#channels li:contains(' + currentChannel.name + ') .fa').removeClass('fa-star fa-star-o');
	$('#channels li:contains(' + currentChannel.name + ') .fa').addClass(currentChannel.starred ? 'fa-star' : 'fa-star-o');
}


/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
	// #6 #taptab #remove selection from all buttons...
	$('#tab-bar button').removeClass('selected');

	//...#6 #taptab #log the new tab on change...
	console.log('Changing to tab', tabId);

	//...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
	$(tabId).addClass('selected');
}


/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
	/* $('#emojis').show(); // #show */
	$('#emojis').toggle(); // #toggle
}


/*message Constructor function*/
function Message(text) {
	this.createdBy = currentLocation.what3words;
	this.latitude = currentLocation.latitude;
	this.longitude = currentLocation.longitude;
	this.createdOn = new Date()
	this.expiresOn = new Date(Date.now() + 15 * 60 * 1000);
	this.text = text;
	this.own = true;
}

function sendMessage(messageObject) {
	var message = new Message("Hello chatter");
	console.log("New message:", message);

}


function createChannelElement(channelObject) {}
function listChannels(){}