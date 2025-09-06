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
        console.log(i);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-graduation-cap"></i>Lesson ${i.level_no}</button>
        `
        level_container.appendChild(btnDiv);
    });
}