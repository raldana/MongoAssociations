const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rest-api-db:Mongmma4819!@cluster0-ttdya.mongodb.net/blog_demo_2?retryWrites=true&w=majority", 
	{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// POST - title, content
const postSchema = new mongoose.Schema({
	title: String
,	content: String
});

const Post = mongoose.model("Post", postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
	email: String
,	name: String
,	posts: [{
		type: mongoose.Schema.Types.ObjectId
	,	ref: "Post"
	}]
});

const User = mongoose.model("User", userSchema);

console.log("mongoose models created");

// let user = new User({
// 	email: "rick@gmail.com"
// ,	name: "Rick"
// });
// user.save();

User.find({name: "Rick"})
	.then(user => {
		console.log("user: " + user);
	})
	.catch(err => {
		console.log(err);
	})
