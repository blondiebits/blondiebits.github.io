app.factory('blog',[function() {

	var post1 = {

		title: "Create a webpage in 5 minutes",

		subtitle: "Learn the basics of HTML for your first webpage in 5 minutes.",

		author: "Kathryn Hodge",

		date: "November 3, 2015",

		paragraphs: ["Let’s create a webpage in 5 minutes. First, get a text-editor. I’m using Sublime, which you can download at sublimetext.com, but others include TextEdit (with plain text) and Atom. Now, we’ll create an index.html file. Notice the extension - it's html because we are writing html. HTML stands for Hyper Text Markup Language and it’s something we can use to code up a quick webpage. With our index.html file open in our text editor, we'll write some boilerplate code. ", "This is code we have to write to define this file as an HTML file. Nearly everything in HTML is written with tags (those right and left arrow brackets) - why is this? Well it’s just the way the language is written. For the HTML tag, we have an opening tag and a closing tag, but this is not necessarily true for all tags. Now, we'll write some more code..."],

		images: ["https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5",
		"https://images.unsplash.com/photo-1461295025362-7547f63dbaea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9c3c96e59ca6b6e66358b9bc2b8ad815"]
	}

	var post2 = {
		title: "Article 2",

		subtitle: "Art 1",

		author: "Kathryn Hodge",

		date: "July 8, 2015",

		paragraphs: ["2auris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."],
		
		images: ["https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5",
		"https://images.unsplash.com/photo-1461295025362-7547f63dbaea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9c3c96e59ca6b6e66358b9bc2b8ad815"]
	}

	return {
		posts : [post1, post2]
	}

}])

