//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.
countDown(4);
// 3
// 2
// 1
// "DONE!"

//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function countDown(time){
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }
  x
  function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }
