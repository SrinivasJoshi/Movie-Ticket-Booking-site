const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count =document.getElementById('count');
const total =document.getElementById('total');
const movieSelect =document.getElementById('movie');
let ticketPrice =+movieSelect.value;

//get data from local storage and populate UI
function populateUI()
{
    //json .parse used to convert string back to array
    const selectedSeats =JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !==null && selectedSeats.length >0){
        seat.forEach(seatt,index =>{
            
        })
    }
}

//save selected movie index and price

function setMovieData(movieIndex,moviePrice)
{
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);


}

//update the no. of seats
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //copy selected seats into an array 
    //map through array 
    //return a new array of indexes 

    const seatsIndex = [...selectedSeats].map((seatt) =>{
        return [...seat].indexOf(seatt);
    });
// json.stringify used to convert array to string so as to be stored in local storage
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    console.log(seatsIndex);
    const selectedSeatsCount =selectedSeats.length;
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketPrice
}

//seat click event
container.addEventListener('click',e =>{
if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied'))
{
    e.target.classList.toggle('selected');
    updateSelectedCount();
}
});

//Movie select event

movieSelect.addEventListener('change',e =>{
    ticketPrice= +e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    updateSelectedCount();

});