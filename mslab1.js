// Generator (Round Robin — список букв)
function* letterGenerator() {
  let letters = ["A", "B", "C"];
  let i = 0;

  while (true) {
    yield letters[i];
    i++;

    if (i === letters.length) {
      i = 0;
    }
  }
}

// Iterator with timeout (очень простой)
function runIterator(iter, seconds) {
  let timeStart = Date.now();

  let timer = setInterval(() => {
    let timeNow = Date.now();

    if (timeNow - timeStart >= seconds * 1000) {
      clearInterval(timer);
      console.log("Stop");
      return;
    }

    let result = iter.next();
    console.log("Letter:", result.value);

  }, 700);
}

// Example
let myGen = letterGenerator();
runIterator(myGen, 4);