function scrollToMainSection(){
    const mainSection = document.getElementById('mainId');

        // Scroll options for smooth behavior
        const scrollOptions = {
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        };

        // Scroll to the main section
        mainSection.scrollIntoView(scrollOptions);
}

// For counting the seats 

const allSeats = document.getElementsByClassName("addSeats");
let count=0;
let leftSeat=40;


for (const seat of allSeats){
    seat.addEventListener("click",function(e){
        seat.classList.add('bg-lime-500');
        const seatData =seat.innerText;
        count=count+1;
        leftSeat=leftSeat-1;
        document.getElementById("seatCount").innerText=count;
        document.getElementById("leftSeatCount").innerText=leftSeat;
        const priceTotal= 550*count;
        document.getElementById("total").innerText=priceTotal;

        handleSeatClick(seatData);
        if(count>=4){
            disableSeats(seat);
        }

    })
}
function disableSeats(){
    for (const seat of allSeats) {
        seat.setAttribute('disabled', 'disabled');
}
}

function handleSeatClick(seatData) {
    
    const tableBody =document.getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerText = seatData;
    cell2.innerText = 'Economy';
    cell3.innerText = 550;
} 