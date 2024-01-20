const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//typeOf Num
let ticketPrice = +movieSelect.value;


container.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
  
      updateSelectedCount();
    }
  });

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  //grabbing index of  the selected seat!!! 
  // copy selected seats into arr
  // map through array
  // return new array of indexes

   const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  //  localStorage.setItem("selectedSeats" , JSON.stringify(seatsIndex));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

 

  const selectedSeatsCount = selectedSeats.length;
   // ex 10$ for 4 selected seat = 10$ * 4, will be added in total 
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// if someone change the movie , prize need to be changing tooo and tickerprize will change

movieSelect.addEventListener("change", (e)=>{
  ticketPrice = e.target.value; // new targeted value will be the new ticketPrize 
  setMovieData(e.target.selectedIndex, e.target.value); // function store new movieName+Value 
  // console.log(e.target.selectedIndex,e.target.value)
  updateSelectedCount(); 
});

// set data 
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex); // u dont need to declare key 
  localStorage.setItem('selectedMoviePrice', moviePrice); // stored but refreash will erase it visually
  //in web application now we have  key: selectedMovieIndex  and value:0/1/2/3 stored locally !! 
};

// get data from local storage and populate ui !!
 function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }

  }};
  populateUI();
  



 updateSelectedCount(); // atLast bcoz latest update deby










