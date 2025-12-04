// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// Remember to commit your solution once it is working.

console.log("Part 1: Fizz Buzz")

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i %5 ==0)
        console.log("Fizz Buzz")
    else if (i % 3 == 0)
        console.log("Fizz")
    else if (i % 3 == 0)
        console.log("Fizz")
    else
        console.log(`${i}`)
}

// Part 3: Feeling Loopy

// As a final task, solve the following practical problem regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

// CSV data looks like this:
    // ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26

console.log("\nPart 3: Feeling Loopy")

let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

data+='\n';

let result = []

let temp = "";
let tempArray = []

for (char of data)
{
    if (char != ',' && char != '\n')
        temp += char;
    else if (char == ','){
        tempArray.push(temp);
        temp = "";
    }
    else if (char == '\n'){
        tempArray.push(temp);
        result.push(tempArray);
        temp = "";
        tempArray = [];
    }
}

console.log(result)
