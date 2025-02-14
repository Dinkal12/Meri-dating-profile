const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});


function createHearts() {
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
setInterval(createHearts, 1000);


const noButton = document.getElementById('noButton');

        noButton.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
            const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
        });

        noButton.addEventListener('click', (e) => {
            e.preventDefault();
        });

       
        function flipPage(page) {
            page.classList.toggle("flipped");
            // Trigger animation for text appearance
            setTimeout(() => {
                let text = page.querySelector("span");
                text.style.opacity = "1";
                text.style.transform = "scale(0.9)";
            }, 500);
        }

       