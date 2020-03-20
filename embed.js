const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rest-api-db:Mongmma4819!@cluster0-ttdya.mongodb.net/blog_demo?retryWrites=true&w=majority", 
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
,	posts: [postSchema]
});

const User = mongoose.model("User", userSchema);


// console.log("mongoose models created");

// let newUser = new User({
// 	email: "charlie@brown.edu"
// ,	name: "Charlie Brown"
// });

// newUser.posts.push(
// 	{title: "a new post", content: "new content"}
// )

// newUser.save()
// 	.then((user) => {
// 		console.log("new user: " + user);
// 	})
// 	.catch((err) =>{
// 		console.log(err);
// 	});



 User.findOne({name: "Charlie Brown"})
	.then(user => {
		console.log(user);
		user.posts.push(
			{title: "brand new post", content: "much more content"}
		);
		user.save();
		console.log(user);
	})
	.catch(err => {
		console.log(err);
	})
