app.factory('blog',[function() {

	var post0 = {

		title: "Create a webpage in 5 minutes",

		subtitle: "Learn the basics of HTML for your first webpage in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: "https://pbs.twimg.com/profile_images/747920859189280770/mh2ZEpb2.jpg",

		date: "Monday, July 10th",
	
	}

	var post1 = {

		title: "CSS in 5 minutes",

		subtitle: "Learn the basics of CSS in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: "https://pbs.twimg.com/profile_images/747920859189280770/mh2ZEpb2.jpg",

		date: "Wednesday, July 13th",
	
	}


	return {
		posts : [post0]
	}

}])

