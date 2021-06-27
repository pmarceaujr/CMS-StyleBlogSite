const { Z_NO_FLUSH } = require('zlib');
const { Posts } = require('../models');

const postData = [
    {
        category: "HTML",
        subject: "HTML TAGS",
        body: "Tags surround each separate element on the page: like the headings, paragraphs, bulleted list, etc. A tag has an opening bracket: < and a closing bracket: > There’s also an opening tag <tag> and a closing </tag> Content goes in between the tags Tags literally surround each piece of content on the page, otherwise the browser will have no idea what to do with it",
        user_id: 1,
    },
    {
        category: "HTML",
        subject: "Don’t Publish a Single Blog Post Without These 9 HTML Tags",
        body: "Understanding basic HTML is absolutely necessary if you’re running a blog. If you didn’t already know, HTML stands for Hypertext Markup Language. It’s a coding language that tells your web browser how to read a web page. HTML tags are the containers for these different kinds of elements. They consist of angle brackets with the name or abbreviation for each code inside of them. Tags usually open with <> and close with </>.  HTML5 is the fifth and current major version of the HTML markup language used across the World Wide Web.",
        user_id: 1,
    },
    {
        category: "HTML",
        subject: "<article>: The Article Contents element",
        body: "The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.",
        user_id: 1,
    },
    {
        category: "CSS",
        subject: "CSS basics",
        body: "CSS (Cascading Style Sheets) is the code that styles web content. CSS basics walks through what you need to get started. We'll answer questions like: How do I make text red? How do I make content display at a certain location in the (webpage) layout? How do I decorate my webpage with background images and colors?",
        user_id: 1,
    },
    {
        category: "CSS",
        subject: "CSS: all about boxes",
        body: "Something you'll notice about writing CSS: a lot of it is about boxes. This includes setting size, color, and position. Most HTML elements on your page can be thought of as boxes sitting on top of other boxes. CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:     padding, the space around the content. In the example below, it is the space around the paragraph text. border, the solid line that is just outside the padding.margin, the space around the outside of the border.   ",
        user_id: 1,
    },
    {
        category: "CSS",
        subject: "How CSS works",
        body: "When a browser displays a document, it must combine the document's content with its style information. It processes the document in a number of stages, which we've listed below. Bear in mind that this is a very simplified version of what happens when a browser loads a webpage, and that different browsers will handle the process in different ways. But this is roughly what happens.The browser loads the HTML (e.g. receives it from the network).It converts the HTML into a DOM (Document Object Model). The DOM represents the document in the computer's memory. The DOM is explained in a bit more detail in the next section.The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images and videos ... and linked CSS! JavaScript is handled a bit later on in the process, and we won't talk about it here to keep things simpler.The browser parses the fetched CSS, and sorts the different rules by their selector types into different 'buckets', e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree).The render tree is laid out in the structure it should appear in after the rules have been applied to it.The visual display of the page is shown on the screen (this stage is called painting).",
        user_id: 1,
    },
    {
        category: "NODE",
        subject: "What is Node.js?",
        body: "Node.js is an open source server environment Node.js is free Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) Node.js uses JavaScript on the server",
        user_id: 1,
    },
    {
        category: "NODE",
        subject: "Why Node.js?",
        body: "A common task for a web server can be to open a file on the server and return the content to the client.Here is how PHP or ASP handles a file request:Sends the task to the computer's file system.Waits while the file system opens and reads the file.Returns the content to the client.Ready to handle the next request.Here is how Node.js handles a file request:Sends the task to the computer's file system.Ready to handle the next request.When the file system has opened and read the file, the server returns the content to the client.Node.js eliminates the waiting, and simply continues with the next request.Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.",
        user_id: 1,
    },
    {
        category: "NODE",
        subject: "What Can Node.js Do?",
        body: "Node.js can generate dynamic page content Node.js can create, open, read, write, delete, and close files on the server Node.js can collect form data Node.js can add, delete, modify data in your database",
        user_id: 1,
    },
    {
        category: "REACT",
        subject: "What is React?",
        body: "React is a JavaScript library created by Facebook.  React is a tool for building UI components.",
        user_id: 1,
    },
    {
        category: "REACT",
        subject: "How does React Work?",
        body: "React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React only changes what needs to be changed!React finds out what changes have been made, and changes only what needs to be changed.You will learn the various aspects of how React does this in the rest of this tutorial.",
        user_id: 1,
    },
    {
        category: "REACT",
        subject: "React.JS History",
        body: "Current version of React.JS is V16.8.6 (March 2019).Initial Release to the Public (V0.3.0) was in July 2013.React.JS was first used in 2011 for Facebook's Newsfeed feature.Facebook Software Engineer, Jordan Walke, created it.The create-react-app version 2.0 package was released in October 2018.Create-react-app version 2.0 supports Babel 7, webpack 4, and Jest23.",
        user_id: 1,
    },
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;