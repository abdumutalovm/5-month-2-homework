let timer;
let ele = document.querySelector(".timeNumber");
let num = +prompt("Daqiqa kiriting");
function reverseTime(num1) {
  let sec = 0;
  let min = num;
  let hour = 0;
  timer = setInterval(() => {
    if (min >= 60) {
      ele.innerHTML = hour + ":" + min + ":" + sec;
      min = 0;
      hour++;
    }

    if (sec >= 60) {
      sec = 0;
      ele.innerHTML = hour + ":" + min + ":" + sec;
      min--;
      if (min <= 0) {
        hour--;
      }
    }

    ele.innerHTML = hour + ":" + min + ":" + sec;
    sec++;
  }, 100);
}
reverseTime();
