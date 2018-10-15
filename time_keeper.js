DAYS = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

MONTHS = {
    0: "January",
    1: "Febuary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

function add_ordinal_suffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function start_clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    if (m < 10)
        m = "0" + m;
    if (h == 0)
        h = 12;
    var amPm;
    if (h > 12)
        amPm = "PM";
    else
        amPm = "AM";
    h = h % 12;
    document.getElementsByClassName('time')[0].innerHTML =
        h + ":" + m + " " + amPm + "<br>" + DAYS[today.getDay()] +
        "<br>" + MONTHS[today.getMonth()] + " " + add_ordinal_suffix(today.getDate());
    var t = setTimeout(start_clock, 500);
}