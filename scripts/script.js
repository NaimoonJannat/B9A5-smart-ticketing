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
        seat.classList.add('bg-lime-500','text-white');
        const seatData =seat.innerText;
        count=count+1;
        leftSeat=leftSeat-1;
        setInnerTextById("seatCount",count);
        setInnerTextById("leftSeatCount",leftSeat);
        const priceTotal= 550*count;
        setInnerTextById("total",priceTotal);
        setInnerTextById("grandTotal",priceTotal);

        const coupon=document.getElementById("coupon");
        handleSeatClick(seatData);
        if(count>=4){
            disableSeats(seat);
            coupon.removeAttribute("disabled");
            
            const discountTr=document.getElementById("discountTr");
            const applyBtn= document.getElementById("applyBtn");
            applyBtn.addEventListener("click",function(e){
                const couponValue=coupon.value;
                if (couponValue== 'NEW15'){
                    const discount15= 2200*0.15;
                    setInnerTextById("discount",discount15);
                    const finalPrice= 2200-discount15;
                    setInnerTextById("grandTotal",finalPrice);
                    coupon.classList.add("hidden");
                    applyBtn.classList.add("hidden");
                    discountTr.classList.remove("hidden");
                }
                else if(couponValue == 'Couple 20'){
                    const discount20= 2200*0.20;
                    setInnerTextById("discount",discount20);
                    const finalPrice= 2200-discount20;
                    setInnerTextById("grandTotal",finalPrice);
                    coupon.classList.add("hidden");
                    applyBtn.classList.add("hidden");
                    discountTr.classList.remove("hidden");
                }
                else{
                    alert('Wrong Coupon! Use a valid one.');
                }
            })
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