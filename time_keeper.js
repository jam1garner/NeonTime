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

firstTime = true;

function start_clock() {
    if (firstTime) {
        firstTime = false;
        startUp();
    }
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

function startUp() {
    var variables = ""
    for (var name in this)
        variables += name + "\n";
    console.re.log(variables);
    if (typeof textColor == "undefined") {
        textColor = "#FF1177"; // default color
    }
    if (typeof clockFormat == "undefined") {
        clockFormat = "12h format";
    }

    neonTextTemplate = `
    @keyframes neontext {
        from {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px {color}, 0 0 35px {color}, 0 0 40px {color}, 0 0 50px {color}, 0 0 75px {color};
        }
        to {
            text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px {color}, 0 0 17.5px {color}, 0 0 20px {color}, 0 0 25px {color}, 0 0 37.5px {color};
        }
    }`.replace(/{color}/g, textColor);

    neonBoxTemplate = `
    @keyframes neonbox {
        from {
            box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px {color}, 0 0 35px {color}, 0 0 40px {color}, 0 0 50px {color}, 0 0 75px {color};
        }
        to {
            box-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px {color}, 0 0 17.5px {color}, 0 0 20px {color}, 0 0 25px {color}, 0 0 37.5px {color};
        }
    }`.replace(/{color}/g, textColor);

    document.getElementById("styleSheet").sheet.insertRule(neonTextTemplate, 0);
    document.getElementById("styleSheet").sheet.insertRule(neonBoxTemplate, 0);
}