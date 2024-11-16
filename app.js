// API = Coder -> API -> System -> API -> Coder
// fetch(link/url)-> API holboh func
// .then -> promise
// status => 200approved
// 500,300,404
// .json() => zambaraagu datag boginsogoh
// [] -> massive/array
fetch('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	delguur => {
	console.log(delguur[delguur.length-1].rating.count);
	}
);
fetch('https://fakestoreapi.com/users').then(
	response => response.json()
).then(
	data => {
		console.log(data[0].name.firstname)
	}
);

let search = document.getElementsByTagName('input')[0];
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let temp = document.querySelector('.temp');
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=>{
	let city = search.value;
	fetch(
	`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
	).then(
		data => {
			name.innerText=data.name;
			temp.innerText=data.main.temp;
			wind.innerText=data.wind.speed;
			desc.innerText=data.weather[0].description;
			if(data.weather[0].main=='Rain'){
				document.getElementsByTagName('img')[0].src="https://cdn-icons-png.flaticon.com/256/3656/3656342.png"
			}else if(data.weather[0].main=='Snow'){
				document.getElementsByTagName('img')[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTiXGuouh-cJoyXiUyNdQwoZXNR_D6_aMzQ&s"
			}else if(data.weather[0].main=='Clouds'){
				document.getElementsByTagName('img')[0].src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
			}else{
				document.getElementsByTagName('img')[0].src="https://cdn-icons-png.flaticon.com/512/7084/7084512.png"
			}
		}
	);
})

