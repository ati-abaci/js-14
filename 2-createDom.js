//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

//todo2

const firstParagraph = document.querySelector('p');
console.log('First Paragraph:', firstParagraph);

//todo3

const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
console.log('first Paragraph:', first);
console.log('Second Paragraph:', second);
console.log('Third Paragraph:', third);
console.log('Fourth Paragraph:', fourth);


//todo4

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs)

//todo5

allParagraphs.forEach((para) => {
    console.log(para.textContent);
});


//todo6
fourth.textContent = 'This is the updated fourth paragraph.';

//todo7
allParagraphs.forEach((para, index) => {
    para.className = `paragraph-${index + 1}`; 
    para.classList.add(`paragraph${index + 1}`); 
});



//todo8
allParagraphs.forEach((para) => {
    para.style.color = 'lightGreen';
    para.style.backgroundColor = '#f0f0f0';
    para.style.border = '2px dashed #000';
    para.style.fontSize = '24px';
    para.style.fontFamily = 'roboto'
});

//todo9
allParagraphs.forEach((para, index) => {
    if (index === 0 || index === 2) { //پاراگراف اول سوم
        para.style.color = 'green'; 
    } else if (index === 1 || index === 3) { // پاراگراف دوم و چهارم
        para.style.color = 'red'; 
    }
});