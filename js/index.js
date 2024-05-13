let pageThemeNode = document.querySelector(`#container_theme`);
let turnOnNode = document.querySelector(`#turn_on`);
let turnOffNode = document.querySelector(`#turn_off`);

turnOffNode.addEventListener(`click`, function () {
    pageThemeNode.classList.add(`dark`);
    pageThemeNode.classList.remove(`light`);
});

turnOnNode.addEventListener(`click`, function () {
    pageThemeNode.classList.add(`light`);
    pageThemeNode.classList.remove(`dark`);
});

let clickButtonNode = document.querySelector(`#click_button`);
let clicksNode = document.querySelector(`#clicks`);

let count = 0;

clickButtonNode.addEventListener(`click`, function () {
    count++;
    clicksNode.innerHTML = `Количество кликов:`+ count;
    if (count == 100) {
        count = 0;
    }
});