const f = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((x) => x.json())
    .then((d) =>  display(d.data));
}
f();
const display = (levels) => {
    const level_container = document.getElementById("level-container");
    level_container.innerHTML = ``;
    levels.forEach(i => { 
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button onclick="load(${i.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-graduation-cap"></i>Lesson ${i.level_no}</button>
        `
        level_container.appendChild(btnDiv);
    });
}
const load = (no) => {
    fetch(`https://openapi.programming-hero.com/api/level/+${no}`)
    .then((x) => x.json())
    .then((d) =>  displayCards(d.data));
}

const displayCards = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = ``;
    words.forEach(i => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl text-center shadow-sm py-20 px-10 space-y-5">
            <h2 class="font-bold text-2xl">${i.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <h1 class="font-bold font-bangla text-3xl">${i.meaning} / ${i.pronunciation}</h1>
            <div class="flex justify-around items-center mt-10">
                <button class="btn bg-slate-300">
                    <i class="fa-solid fa-circle-info"></i>
                </button>
                <button class="btn bg-slate-300">
                    <i class="fa-solid fa-volume-low"></i>
                </button>
            </div>
        </div>
        `
        wordContainer.appendChild(card);
    });
}