app.factory('blog',[function() {

	var kathryn_image = "https://pbs.twimg.com/profile_images/747920859189280770/mh2ZEpb2.jpg"

	var post0 = {

		title: "Create a webpage in 5 minutes",

		subtitle: "Learn the basics of HTML for your first webpage in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",
		
		date: "Friday, July 8th",
	
	}

	var post1 = {

		title: "CSS in 5 minutes",

		subtitle: "Learn the basics of CSS in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: kathryn_image,

		author_description: "Software Developer // Hacker // Tech Evangalist",

		author_bio: "bio/kathryn_bio.html",

		date: "Friday, July 15th",
	
	}


	return {
		posts : [post1, post0]
	}

}])

