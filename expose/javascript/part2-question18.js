function writeTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  setInterval(writeTime, 1000)
  