function fetchHeroes(){
    fetch("data.json")
    .then((response) => response.json())
    .then((jsonData) =>{
        const container = document.getElementById("superId");
        jsonData.map((heroe) => {
            const heroeCard = document.createElement("div");
            heroeCard.className = "heroeCard";
            heroeCard.textContent = `
            Вселенная: ${heroe.universe}`;
            container.append(heroeCard);
            const heroeName = document.createElement("h2");
            heroeName.textContent = heroe.name;
            heroeCard.appendChild(heroeName);
            const heroeAlterego = document.createElement("p");
            heroeAlterego.textContent = `Альтерего: ${heroe.alterego}`;
            heroeCard.appendChild(heroeAlterego);
            const heroeOcupation = document.createElement("p");
            heroeOcupation.textContent = `Кредо: ${heroe.occupation}`;
            heroeCard.appendChild(heroeOcupation);
            const heroeFriends = document.createElement("p");
            heroeFriends.textContent = `Друзья: ${heroe.friends}`;
            heroeCard.appendChild(heroeFriends);
            const heroePowers = document.createElement("p");
            heroePowers.textContent = `Суперсилы: ${heroe.superpowers}`;
            heroeCard.appendChild(heroePowers);
            const photo = document.createElement("img");
            photo.src = heroe.url;
            photo.className = "img";
            heroeCard.appendChild(photo);
            //const heroeInfo = document.createElement("p");
            //heroeInfo.textContent = `Информация: ${heroe.info}`;
            //heroeCard.appendChild(heroeInfo);
            const stars = document.createElement("div");
            stars.className = "stars";
            heroeCard.appendChild(stars);
            const star1 = document.createElement("i");
            star1.textContent = "★";
            stars.appendChild(star1);
            const star2 = document.createElement("i");
            star2.textContent = "★";
            stars.appendChild(star2);
            const star3 = document.createElement("i");
            star3.textContent = "★";
            stars.appendChild(star3);
            const star4 = document.createElement("i");
            star4.textContent = "★";
            stars.appendChild(star4);
            const star5 = document.createElement("i");
            star5.textContent = "★";
            stars.appendChild(star5);
                const starS = document.querySelectorAll(".stars i");
                starS.forEach((star, index1)=>{
                    star.addEventListener("click", ()=>{
                        starS.forEach((star, index2)=>{
                            index1>=index2 ? star.classList.add("active") : star.classList.remove("active");
                        })
                    })
            })
            localStorage.setItem("rating", starS);
        });
    })
};
fetchHeroes();


/*const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1)=>{
    star.addEventListener("click", ()=>{
        stars.forEach((star, index2)=>{
            index1>=index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
})**/
