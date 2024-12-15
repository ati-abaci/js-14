/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];
const userInput = prompt("Please enter some text:");
let coloredText = '';
for (let char of userInput) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    coloredText += `<span style="color: ${randomColor};">${char}</span>`;
}
document.getElementById('word').innerHTML = coloredText;

