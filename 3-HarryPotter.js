//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */


const characterImages = {
    "Harry Potter": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfN5nPL92KSVW4IUKrZQJXUly6HiyUEQjJzQ&s",
    "Hermione Granger": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VTMC7wxQXtVWYIB7BSAgVeBs1HlGbnn-oA&s",
    "Ron Weasley": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FKp5Zo-vBJ1pmdIlFT9VBCGaP2hANPH8MA&s",
    "Severus Snape": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvzXjcJOs_1dn5k6e58hNuPBhLgsK0aTP4Q&s",
    "Draco Malfoy": "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
    "Cedric Diggory": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqeschhT3IP3G6yqPtr27qvtvWZU8UvUFyg&s",
    "Lord Voldemort": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbLyOTzdyK_ooJtdZkmiOudcCNhaNzSKHdQ&s",
    "Bellatrix Lestrange": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqPCW-TaE4ubYMyAR9JvhS7_I_KN9jsQpVw&s"
};

const cards = document.querySelectorAll('.card');
Object.keys(characterImages).forEach((character, index) => {
    const img = cards[index].querySelector('img');
    img.src = characterImages[character];
    img.alt = character;
});

















