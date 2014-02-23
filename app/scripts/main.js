
sc_inf = {
   client_id: 'c02503bd4d6ec44a833638cefaef526c',
   client_secret: '9a9c697b13a53ee8dad03754ced29b97',
};

SC.initialize({
  client_id: sc_inf.client_id,
  redirect_uri: sc_inf.client_secret,
});



vdro = {
	makeID: function()
	{
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 5; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    return text;
	},
	cardGenerator: {
		soundcloud: function (urlSend) {
			cardID = vdro.makeID();

			cardData = "<div class='card soundcloud " + cardID + "'>" + cardID + "</div>";
			card = $('.source-feed').prepend(cardData);
			SC.oEmbed(urlSend, {auto_play: true, color: "ff0066", maxheight: 210}, function(oembed){
			   console.log("oEmbed response: ", oembed);
			   activeCard = $('.card').first();
			   $(activeCard).html(oembed.html);
			});
		},
		youtube: function(){
			console.log('youtbe ' + urlSend);
		}
	}
}

$('.single-story').click(function(event){
	event.preventDefault();
	cardType = $(this).data('card-type');
	urlSend = $(this).data('url');

	console.log(cardType + ' - ' + urlSend);


	// What kind of card are we dealing with?
	switch (cardType) {
	case "soundcloud":
		console.log(cardType + 'is definitely a soundcloud type')
		vdro.cardGenerator.soundcloud(urlSend);
	break;
  	case "youtube":
    	console.log(cardType + 'is definitely a youtube link')
    break;
  	default:
    	console.log('defaulted to iframe')
	}
	
})