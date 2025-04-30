function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// Call printTime every 1000 milliseconds
setInterval(printTime, 1000);
