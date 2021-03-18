
window.onload = () => {
    this.resizeHeader();
    document.querySelector('.button').addEventListener('click', () => { this.scrollDown() });
}
scrollDown = () => {
    const background = document.querySelector('.background');
    window.scrollTo({ behavior: 'smooth', top: background.clientHeight - 50 })
}
window.onresize = () => {
    this.resizeHeader();
}
toggleMenu = () => {
    document.querySelector('.burger-menu').classList.toggle("change");
    document.querySelector('.menu').classList.toggle('hide');
}
resizeHeader = () => {
    if (window.innerWidth < 1024) {
        document.querySelector('.mobile').classList.remove('hide');
        document.querySelector('.desktop').classList.add('hide');
    } else {
        document.querySelector('.mobile').classList.add('hide');
        document.querySelector('.desktop').classList.remove('hide');
    }
}