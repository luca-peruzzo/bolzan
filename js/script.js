
window.onload = () => {
    this.resizeHeaderAndFooter();
    document.querySelector('.button').addEventListener('click', () => { this.scrollDown() });
}
scrollDown = () => {
    const background = document.querySelector('.background');
    window.scrollTo({ behavior: 'smooth', top: background.clientHeight - 50 })
}
window.onresize = () => {
    this.resizeHeaderAndFooter();
}
toggleMenu = () => {
    document.querySelector('.burger-menu').classList.toggle("change");
    document.querySelector('.menu').classList.toggle('hide');
}
resizeHeaderAndFooter = () => {
    if (window.innerWidth < 1024) {
        document.querySelectorAll('.mobile').forEach(el => { el.classList.remove('hide'); });
        document.querySelectorAll('.desktop').forEach(el => { el.classList.add('hide'); });
    } else {
        document.querySelectorAll('.mobile').forEach(el => { el.classList.add('hide'); });
        document.querySelectorAll('.desktop').forEach(el => { el.classList.remove('hide'); });
    }
}

rotateCardMobile = (id) => {
    if (window.innerWidth < 1025) {
        let currentCard = document.querySelector(id);
        if (currentCard.classList.contains('flip-card-rotate-mobile')) {
            currentCard.classList.remove("flip-card-rotate-mobile");
        } else {
            document.querySelectorAll('.flip-card-inner').forEach(el => {
                if (el.classList.contains('flip-card-rotate-mobile')) { el.classList.remove('flip-card-rotate-mobile'); }
            });
            currentCard.classList.add('flip-card-rotate-mobile');
        }
    }
}