var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

button.addEventListener('click',function(){
	getJoke();
});

//implementacja funkcji getJoke
window.onload = getJoke();

function getJoke() {
	var xhr = new XMLHttpRequest();  //nowa instancja
	xhr.open('GET',url);   // połączenie z adresem
	xhr.addEventListener('load',function(){  // nasluchiwanie na odp serwera
		var response1 = JSON.parse(xhr.response); // w callbacku tworzymy zmienna response 
		paragraph.innerText = response1.value.joke;
	});
	xhr.send();
}
