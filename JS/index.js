/*
    Display and Hidden Donation and History Container and change Button color according to button click
*/

const donationBtn = document.getElementById('donation_btn')
const historyBtn = document.getElementById('history_btn')

const donationContainer = document.getElementById('donation_container')
const historyContainer = document.getElementById('history_container')

donationBtn.addEventListener('click', function(){
    // Change Button Color
    donationBtn.classList.add('bg-primaryColor')
    historyBtn.classList.remove('bg-primaryColor')

    // Show Hidden Containers
    historyContainer.classList.add('hidden')
    donationContainer.classList.remove('hidden')

})

historyBtn.addEventListener('click', function(){
    // Change Button Color
    historyBtn.classList.add('bg-primaryColor')
    donationBtn.classList.remove('bg-primaryColor')

    // Show Hidden Containers
    donationContainer.classList.add('hidden')
    historyContainer.classList.remove('hidden')
})



// Donation Calculation
function donationCalculation(btnElement){

    const date = new Date()

    const totalInitialAmountElement = document.getElementById('total_initial_amount')
    const totalInitialAmount = parseFloat(totalInitialAmountElement.innerText)

    const parentCard = btnElement.closest('.card')

    const donationTitle = parentCard.querySelector('.card-title').innerText

    const previouslyDonatedAmountElement = parentCard.querySelector('.amount')
    const previouslyDonatedAmount = parseFloat(previouslyDonatedAmountElement.innerText)

    const currentInputElement = parentCard.querySelector('input[type="text"]')
    const currentInputAmount = parseFloat(currentInputElement.value)

    if(currentInputAmount <= 0){
        alert("Amount can not be Zero or Negative. Please enter again.")
    }else if(currentInputAmount > totalInitialAmount){
        alert("Insufficient Balance")
    }else if(isNaN(currentInputAmount)){
        alert("Amount Can not be empty and Must be a Number. Please enter again")
    }else{
        previouslyDonatedAmountElement.innerText = previouslyDonatedAmount + currentInputAmount

        totalInitialAmountElement.innerText = totalInitialAmount - currentInputAmount

        // Open Modal
        const modalContainer = document.getElementById('modal_container')
        modalContainer.innerHTML = `
                <input type="checkbox" id="my_modal_6" class="modal-toggle" />
                <div class="modal" role="dialog">
                <div class="modal-box text-center">
                    <h3 class="text-4xl font-bold">Thank You!</h3>
                    <img class="mx-auto mt-4" src="assets/coin.png" alt="">
                    <p class="py-4">Your donation of BDT <span class="font-bold">${currentInputAmount}</span> for <span class="font-bold">${donationTitle}</span> is successful</p>
                    <div class="modal-action">
                    <label for="my_modal_6" class="btn w-full bg-primaryColor">Close!</label>
                    </div>
                </div>
                </div>
        `
        
        const modalCheckbox = document.getElementById('my_modal_6')
        modalCheckbox.checked = true

        // Creating History
        createHistory(currentInputAmount, donationTitle, date)
    }

    currentInputElement.value = ''

}




// Creating History
function createHistory(donationAmount, donationName, date){
    const historyContainer = document.getElementById('history_container')
    const cards = historyContainer.querySelector('.cards')

    cards.innerHTML += `
        <div class="card border py-5 px-10 shadow-lg mb-10">
            <h2 class="title font-bold text-xl mb-2">${donationAmount} Taka is Donated for ${donationName}</h2>
            <p class="date">Date : ${date}</p>
        </div>
    `
}
