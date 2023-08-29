function changebg() {
    var header = document.getElementsByClassName("header")[0];
    var imageURL = event.target.src;
    var heading = event.target.alt;
    const contentText = document.querySelector(".content-text");
    contentText.innerHTML = ''
    void contentText.offsetWidth;

    header.style.backgroundImage = `linear-gradient(
            rgba(255, 255, 255, 0.45),
            rgba(4, 9, 30, 0)
          ), url(${imageURL})`;
    header.style.backgroundPosition = "0 0";


    var activeElements = document.getElementsByClassName("active");
    for (var i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove("active");
    }

    event.target.classList.add("active");

    contentText.innerHTML = `<h1 class="heading">${heading}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat exercitationem ea modi
        qui hic, sit excepturi deleniti consequuntur commodi esse ab doloribus enim obcaecati, atque
        perferendis, dolorum dolor consectetur laudantium! Eius quisquam veritatis cum rerum, modi
        officia. Porro beatae incidunt eius vel nisi qui, dolorum enim quaerat nostrum mollitia.</p>
    <a href="#">Read More <span>→</span>
    </a>`;
}