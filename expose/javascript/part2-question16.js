var count = 0;
for (let car in statistics) {
  if (car[0] == 'r'){
    console.log(car, statistics[car]);
  }
  else if (count%2 != 0) {
    console.log(car, statistics[car]);
  }
  count = count + 1;
}