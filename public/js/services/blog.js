app.factory('blog',[function() {

	var kathryn_image = "https://pbs.twimg.com/profile_images/747920859189280770/mh2ZEpb2.jpg"

	var post0 = {

		title: "Create a webpage in 5 minutes",

		subtitle: "Learn the basics of HTML for your first webpage in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",
		
		date: "Friday, July 8",
	
	}

	var post1 = {

		title: "Style your website with CSS in 5 minutes",

		subtitle: "Learn the basics of CSS in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",

		date: "Friday, July 15",
	
	}

	var post2 = {

		title: "How to look good with Bootstrap",

		subtitle: "Learn the fundamentals of Bootstrap in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",

		date: "Friday, July 22",
	
	}

	var post3 = {

		title: "Manipulate Websites with DevTools",

		subtitle: "Learn how to preview styling options and manipulate websites with the Chrome Developer Tools in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",

		date: "Friday, July 29",

	}

	var post4 = {

		title: "Interactive Websites with JS in 7 Minutes",

		subtitle: "Learn how to use JavaScript to make static websites interactive in 7 minutes.",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",

		date: "Friday, August 5",

	}

	var post5 = {

		title: "Using a JS Library: jQuery in 6 Minutes",

		subtitle: "Dynamically change a website with the jQuery Library in 6 minutes!",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",

		date: "Friday, August 12",

	}

	var post6 = {

		title: "Learn the Basics of Angular.js in 5 minutes",

		subtitle: "Create your first angular.js application in this tutorial. Learn about controllers, scope, and more!",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",

		date: "Friday, August 19",

	}


	return {
		posts : [post4, post3, post2, post1, post0]
	}

}])

