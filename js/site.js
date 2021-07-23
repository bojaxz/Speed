// get the values from the Page
// Controller function to start/initialize program
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Validating our input to prevent unwanted inputs
    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // if statement to check that start and end values are ints
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers()
        let numbers = generateNumbers(startValue, endValue);

        // call displayNumbers()
        displayNumbers(numbers);
    } else {
        alert("You must enter a number in the start and end values.")
    }

}

// generate numbers from startValue to the endValue
function generateNumbers(sValue, eValue) {
    
    let numbers = [];

    // get all numbers from start to end inclusvie
    for (let i = sValue; i <= eValue; i++){
        numbers.push(i);
        console.log(numbers);
    }

    return numbers;
}

// display numbers and mark even in bold
function displayNumbers(numbers) {
    let templateRows = "";
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number % 2 == 0) {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        } else {
            templateRows += `<tr><td>${number}</td></tr>`;
        }
    }

    document.getElementById("results").innerHTML= templateRows;
}
