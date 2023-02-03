const backImageArr = [
    './images/banner_01.png',
    './images/banner_02.png',
    './images/banner_03.png',
];
const container = document.querySelector('.container');
const showBackImage = () => {
    let i = Math.floor(Math.random()*backImageArr.length);
    container.style.backgroundImage = `url('${backImageArr[i]}')`;
    setTimeout(showBackImage,2500);
}
window.onload = showBackImage;