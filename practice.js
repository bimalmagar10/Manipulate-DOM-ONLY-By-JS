//-------------------------------------------------------------------//
//--IIFE--//Immediately INVOKDE FUNCTION EXPRESSION
//-------------------------------------------------------------------//


(function(){
	//Creates a container
	const createContainer = function (name){
		let div = document.createElement("div");
		div.setAttribute("id",name);
		div.style.margin = "100px auto";
		div.style.maxWidth = "680px";
		document.body.appendChild(div);
	}
//-------------------------------------------------------------------//
//--Checks if the number is odd and returns the boolean value--//
//-------------------------------------------------------------------//
function isOdd(number){
     return (number % 2) !== 0;
}

//-------------------------------------------------------------------//
//--Checks if the number is prime and returns the boolean value--//
//-------------------------------------------------------------------//
function isPrime(number){
 if( number > 0 && number > 1 ) {
 	let isPrime = true; 
 	for(let i = 2;i<= number ; i++){ 
 		if(number % i === 0 && number !== i){ 
           isPrime = false; 
 		}
 	}
 	return isPrime;
 } else {
 	return false;
 }
}

//-------------------------------------------------------------------//
//--Checks if the number is even and returns the boolean value--//
//-------------------------------------------------------------------//
function isEven(number){
	return (number % 2) === 0;
}

createContainer("numbers-container");
let randomNumberContainer = document.getElementById("numbers-container");
randomNumberContainer.insertAdjacentHTML("beforebegin","<h1>1-100 Numbers Generated using only JS</h1>");
//-------------------------------------------------------------------//
//--Creates div element for a number container with parametes color and number--//
//-------------------------------------------------------------------//
function createNumberDiv(color,number) {
	let div1 =  document.createElement("div");
	div1.style.boxSizing = "border-box";
	div1.style.display = "inline-block";
	div1.style.fontSize = "20px";
	div1.style.lineHeight = "80px";
	div1.style.textAlign = "center";
	div1.style.width = "100px";
	div1.style.height = "80px";
	div1.style.backgroundColor = color;
	div1.innerText = number;
	div1.style.margin = "5px";
	div1.style.color= "#fff";
	return div1;
}

//-------------------------------------------------------------------//
//--Appends the number in a number div with specific number and color--//
//-------------------------------------------------------------------//
function numberAppender(){
	for(let i = 0;i<=101 ; i++){
		if(isOdd(i)){
	      if(isPrime(i)){
	       randomNumberContainer.appendChild(createNumberDiv("tomato",i));
	      } else {
	      	randomNumberContainer.appendChild(createNumberDiv("gold",i));
	      }
		} else if(isEven(i)) {
			if(isPrime(i)){
			 randomNumberContainer.appendChild(createNumberDiv("tomato",i));
			} else {
				randomNumberContainer.appendChild(createNumberDiv("mediumseagreen",i));
			}
		}
	}
}
numberAppender();

//-------------------------------------------------------------------//
//--WORLD'S COUNTRIES LIST--//
//-------------------------------------------------------------------//

//-------------------------------------------------------------------//
//--Creates the div element for the country box--//
//-------------------------------------------------------------------//
function createCountry(name,image) {
	let countryBox = document.createElement("div");
	countryBox.style.cssText = `box-sizing:border-box;overflow:hidden;display:inline-block;width:160px;height:160px;margin:5px;
	text-align:center;line-height:160px;
	background-color:#ccc;color:#fff;text-transform:uppercase;font-size:15px;font-family:monospace;letter-spacing:1px;backdrop-filter:saturate(180%) blur(10px);background-image:linear-gradient(to right,rgba(0,0,0,.5), rgba(0,0,0,.5)),url("${image}");background-size:100% 100%;background-repeat:no-repeat;`;
	countryBox.innerText = name;
	return countryBox;
}

//-------------------------------------------------------------------//
//--Fetches the countries from rest countries API ND append it to the paeticular divs--//
//-------------------------------------------------------------------//
function createCountriesArray(){
	createContainer("countries-container");
	let id = document.getElementById("countries-container");
	let countriesAPI = "https://restcountries.eu/rest/v2/all";	
	fetch(countriesAPI)
	.then(res => res.json())
	.then(result=> result.forEach(element => id.appendChild(createCountry(element.name,element.flag))));
}


createCountriesArray();
//-------------------------------------------------------------------//
//--Heading for the countries list container--//
//-------------------------------------------------------------------//
function heading(){
	let countriesHeader = () => document.getElementById("countries-container").insertAdjacentHTML("beforebegin",`<h1>World's Countries List.</h1><p>Total Countries:</p>`);
	countriesHeader();
	Array.from(document.querySelectorAll("h1")).forEach(el => el.style.cssText = `text-align:center;padding-top:100px;font-family:monospace;font-size:25px;`);
	document.querySelector("p").style.cssText = `text-align:center;font-family:monospace;font-size:20px;`;

}
heading();
const countriesLength = function () {
	 let count = 0;
	 fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(result => result.forEach(element => {
    	count = count + 1;
    	document.querySelector("p").innerText = count;
    }));
};
countriesLength();
})();









