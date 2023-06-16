const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");
const emojiContainer = [];

async function getEmoji() {
    const response = await fetch("https://emoji-api.com/emojis?access_key=0d018f255fb745874614c348a76e89019581f0b7")
    const data = await response.json();
    for (let i = 0; i < 2600; i++) {
        emojiContainer.push({
            emojiImg: data[i].character,
            emojiName: data[i].unicodeName,
        })
    }

}
getEmoji();
console.log(emojiContainer);
btnEl.addEventListener("click", () => {
    try {

        const randomNumber = Math.floor(Math.random() * emojiContainer.length);
        console.log(randomNumber);
        btnEl.innerText = emojiContainer[randomNumber].emojiImg;
        emojiNameEl.innerText = emojiContainer[randomNumber].emojiName;
    } catch (error) {

    }



})
