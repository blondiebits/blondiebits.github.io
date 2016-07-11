app.factory('blog',[function() {

	var post1 = {

		title: "Create a webpage in 5 minutes",

		subtitle: "Learn the basics of HTML for your first webpage in 5 minutes.",

		author: "Kathryn Hodge",

		author_image: "https://pbs.twimg.com/profile_images/747920859189280770/mh2ZEpb2.jpg",

		date: "Monday, July 10th",

		paragraph_context: [["Let’s create a webpage in 5 minutes. First, get a text-editor. I\’m using Sublime, which you can download at sublimetext.com, but others include TextEdit (with plain text) and Atom. Now, we’ll create an index.html file. Notice the extension - it\'s html because we are writing html. HTML stands for Hyper Text Markup Language and it’s something we can use to code up a quick webpage. With our index.html file open in our text editor, we\'ll write some boilerplate code."], ["This is code we have to write to define this file as an HTML file. Nearly everything in HTML is written with tags (those right and left arrow brackets). Why is this? Well it’s just the way the language is written. For HTML tags, we usually have an opening tag and a closing tag, but this is not necessarily true for all tags. Now, we\'ll write some more code…"],["We just added a head tag and a body tag. Here, the head holds the metadata of the application and the body holds our actual content. Now let’s see what this code does. To do this, we left-click on our file and open the file with a browser (instead of a text-editor."],["This should pull up an empty screen. Why is that? It’s because our body tag doesn’t have anything in it! We need to add some real content. We can add a header tag with the text \"Hello World\"."], ["Here, the h1 tag is a header tag. We can also create h2, h3, all the way up to h6 tags. The only difference between the headers is size. The h1 tag creates the biggest header and the h6 tag creates the smallest header."], ["If we open the file with a browser, then we should have a webpage with the text Hello World. If your page doesn\'t have anything on it, make sure you have saved your file after adding the h1 tag because the browser will only show what has been saved."], ["Now, we\'ll add a quick h3 tag with the text \"blue\"and see what happens."],["And we see what we were expecting. The header with the text \"blue\" is smaller than the header with the text \"Hello World\"."], ["So we have headers, what about other content? Well we can add some paragraph text with a p tag (also called a \"p element\").", "We can also add an image with an image tag. Below, src is an attribute of the image tag and it\'s where we specify the source of the image. Now, I don\'t know about you, but I love coffee so I\'m using a coffee image but feel free to add whatever picture you\'d like."], ["And we\'ll open this up in the browser to see what it looks like."], ["Great! We have some headers, paragraph text, and an image. Now, we might want to add some extra space between the image and paragraph tag so we can write some br tags to do this."], ["Opening this up in the browser, we see there\'s now quite a bit of space between the paragraph and the image. Now, this webpage isn\'t the prettiest. Can we make it prettier? YES! With CSS. HTML defines the core content of a webpage and CSS allows us to add design. You\'ll learn all about CSS in next week\'s post! See you then."]],
		
		images: ["https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5", "https://images.unsplash.com/photo-1461295025362-7547f63dbaea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9c3c96e59ca6b6e66358b9bc2b8ad815"]
		
}

	// var post2 = {
	// 	title: "Article 2",

	// 	subtitle: "Art 1",

	// 	author: "Kathryn Hodge",

	// 	date: "July 8, 2015",

	// 	paragraphs: ["2auris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.", "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."],
		
	// 	images: ["https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7bd13db3b64ce66833f51169e9e6e5e5",
	// 	"https://images.unsplash.com/photo-1461295025362-7547f63dbaea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9c3c96e59ca6b6e66358b9bc2b8ad815"]
	// }

	return {
		posts : [post1]
	}

}])

