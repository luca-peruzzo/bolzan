
window.onload = () => {
    document.querySelector('.button').addEventListener('click', () => { this.scrollDown() });
}
scrollDown = () => {
    const background = document.querySelector('.background');
    window.scrollTo({ behavior: 'smooth', top: background.clientHeight - 50 })
}