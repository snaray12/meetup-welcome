var Alexa = require('alexa-app');

var app = new Alexa.app('meetup-welcome');

app.launch(function(req, res) {
    var prompt = 'Welcome to Chennai Devops meetup';
    res.say(prompt).shouldEndSession(true);
});

app.intent('meetup', function(req, res){
    var prompt = 'Welcome to Chennai Devops meetup';
    res.say(prompt).shouldEndSession(true);
});

var utterancesMethod = app.utterances;
app.utterances = function() {
	return utterancesMethod().replace(/\{\-\|/g, '{');
}

module.exports = app;
