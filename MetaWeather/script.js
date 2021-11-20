//https://www.metaweather.com/api/location/455825/

const inputLocation = document.getElementById('location');
const btnLocation = document.getElementById('btnlocation');
const resultLocation = document.querySelector('.searchResult');

btnLocation.addEventListener('click', handleClick);

function handleClick(event) {
  const location = inputLocation.value;
  event.preventDefault();
  findLocation();
}

function findLocation(location){
  fetch(`https://www.metaweather.com/api/location/${location}/`)
  .then(response => response.jason())
  .then(body =>{
    resultLocation.innerText = body;
  })
}
