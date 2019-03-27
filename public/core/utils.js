var chrono = (elem) => {
    var hour = 0,
        min = 0,
        sec = 0;
    function increment() {
        sec++;
        if (sec < 10) sec = `0${sec}`;
        if (sec > 59) {
            sec = '00';
            min++;
            if (min < 10) min = `0${min}`;
        }
        if (min > 59) {
            min = '00';
            hour++;
            if (hour < 10) hour = `0${hour}`;
        }
        elem.textContent = `${hour} : ${min}  : ${sec}`;
    }
    setInterval(() => {
        increment(elem)
    }, 1000);

};

var clock = (elem) => {
    var date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();

    elem.textContent = `${hour} : ${min}`;

    setTimeout(() => {
        clock(elem);
    }, 1000);
}