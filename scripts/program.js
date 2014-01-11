// document.writeln("This is a day that I have been looking forward to for two and a half years!");

var book = {
	title: "Javascript The Good Parts", 
	author: "Douglas Crockford", 
	chapters: [
		{
			name: "Chapter 1 - Grammar", 
			index: 1
		},
		{
			name: "Chapter 2 - Objects", 
			index: 2
		}
	]
};

console.log(book.title.reference && book.title.reference.hello);
console.log(book.title.reference.hello);
