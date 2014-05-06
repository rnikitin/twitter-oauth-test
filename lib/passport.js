/// TWITTER strategy
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
	consumerKey: 'CKRpmQiEoHMP7uf6q4sUrI8am',
	consumerSecret: 'igRTWt9IJBXWHpwswuQhu7GNLyTdskde2mefGQ3gnXMws90sY5',
	callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
},
function(token, tokenSecret, profile, done) {
	done(null, {username: 'user1'});
}
));

module.exports = passport;
