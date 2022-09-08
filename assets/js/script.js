// TODO: Declare any global variables we need
let headscount =0;
let tailscount =0;



let flipbutton =document.querySelector(".flipped")
let resetbutton = document.querySelector(".reset")
function calculate(){
    document.querySelector(".heads").textContent=headscount
    document.querySelector(".tails").textContent=tailscount
    let total= headscount+tailscount
    if (total==0){
        document.querySelector(".heads-percent").textContent ="0%"
        document.querySelector(".tails-percent").textContent="0%"

    }
    else{
        let percentageHead=Math.round (headscount/total *100)
        let percentageTail=Math.round(tailscount/total *100)


    }
    
    
    document.querySelector(".heads-percent").textContent = percentageHead +"%"
    document.querySelector(".tails-percent").textContent = percentageTail+"%"
}


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    flipbutton.addEventListener('click', function(){
        let isHeads = Math.random()>=0.5
        if (isHeads){
            document.querySelector(".coin-image").src=("./assets/images/penny-heads.jpg")
            headscount++;
            document.querySelector(".status-message").textContent="You flipped Heads!"
        }
        else{
            document.querySelector(".coin-image").src=("./assets/images/penny-tails.jpg")
            tailscount++
            
            document.querySelector(".status-message").textContent="You flipped Tails!"
       

        }
        
    calculate()
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})

document.querySelector(".reset").addEventListener("click", function()
{
    headscount=0;
    tailscount=0;
    calculate()
})

