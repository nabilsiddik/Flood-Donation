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
    const totalInitialAmountElement = document.getElementById('total_initial_amount')
    const totalInitialAmount = parseFloat(totalInitialAmountElement.innerText)

    const parentCard = btnElement.closest('.card')
    const previouslyDonatedAmountElement = parentCard.querySelector('.amount')
    const previouslyDonatedAmount = parseFloat(previouslyDonatedAmountElement.innerText)

    const currentInputElement = parentCard.querySelector('input[type="text"]')
    const currentInputAmount = parseFloat(currentInputElement.value)

    previouslyDonatedAmountElement.innerText = previouslyDonatedAmount + currentInputAmount

    totalInitialAmountElement.innerText = totalInitialAmount - currentInputAmount

    currentInputElement.value = ''
}

