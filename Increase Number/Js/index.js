let nums = document.querySelectorAll('.nums .num');
let section = document.querySelector('.nums')
let start = false
function startCount(el) {
    let goal = +el.dataset.goal
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        };
    },2000/goal)
}
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!start) {
            nums.forEach((num) => startCount(num))
        }
        start = true;
    }
};
