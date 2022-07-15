const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update the selected count and total amount

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  const selectedSeatsCount =selectedSeats.length;

  count.innerText =selectedSeatsCount;
  total.innerText = selectedSeatsCount*ticketPrice;

}
// Movie Click event 

movieSelect.addEventListener('change' , (e)=>{
  ticketPrice= +e.target.value   // + sign is used to make this its type in number
  updateSelectedCount();
})

// Seat click event 
container.addEventListener('click' , (e)=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    
    e.target.classList.toggle('selected')

    updateSelectedCount();
  }
})

