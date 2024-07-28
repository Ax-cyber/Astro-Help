async function f(inp){
	
    console.log("first");
let url = `https://best-yearly-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/?zodiacSign=${inp}`;
let options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': "8797034048msha00a8d362438702p1c841bjsnbf52cac56d47",
		'x-rapidapi-host': 'best-daily-astrology-and-horoscope-api.p.rapidapi.com'
	}

};
try {
	let response = await fetch(url, options);
	let result = await response.json();
	io.innerHTML=result.prediction;
    // console.log(result);

} 
catch (error) {
	console.error(error);
}

}
let btn=document.querySelector("#btn");
let i=document.querySelector("#i");
let io=document.querySelector("#h11");
// let io=document.querySelector("#io");
btn.addEventListener('click',()=>{
    let e=i.value.trim();
    f(e);
    
})
