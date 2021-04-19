const url = "https://blog.maksym.one/wp-json/wp/v2/posts";
async function getContent(){
	
		const response = await fetch(url);
		const result = await response.json();
		console.log(result);
	
}
getContent();
