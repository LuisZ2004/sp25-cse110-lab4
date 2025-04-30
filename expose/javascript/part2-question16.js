let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2  
};

//for each type of car redCards, blackCars etc 
for (let property in statistics) {
    //value = # of cars
    let value = statistics[property];
    
    //if the first character is r or value is odd (not divisible by 2), print
    if (property[0] === 'r' || value % 2 !== 0) {
        console.log(value);
    }
}
  