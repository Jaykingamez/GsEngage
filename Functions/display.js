/*
Displays a properly formatted string for display in Command Line 
*/
export function display(string){
    let formattedString = "    ";
    let stringArray = string.split(" ");
    let lengthCounter = 0
    for (const element of stringArray){
        // limit chosen before new line
        if (lengthCounter > 150){
            // add starting spaces to make it inline with the rest of the text
            formattedString += "\n    "
            lengthCounter = 0
        }
        formattedString += element + " ";
        // add one for the space
        lengthCounter += element.length + 2;
    }
    // ensure all new text is printed on new line
    return formattedString + "\n";
}