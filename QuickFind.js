class QuickFindFn {
  constructor(inputLength) {
    this.inputLength = inputLength;
    this.tracker = [];
    for (let i = 0; i < inputLength; i++) {
      this.tracker[i] = i;
    }
  }

  drawConnection(p, q) {
    if (this.tracker[p] !== this.tracker[q]) {
      for (let i = 0; i < this.inputLength; i++) {
        if (this.tracker[i] === this.tracker[p]) {
          this.tracker[i] = this.tracker[q];
        }
      }
      console.log(`${p} and ${q} have been connected.`);
    }
  }

  connectionExists(p, q) {
    if (this.tracker[p] === this.tracker[q]) {
      return true;
    } return false;
  }

  printTracker() {
    console.log('TRACKER:', this.tracker);
  }
}

let testTracker = new QuickFindFn(10);
testTracker.printTracker();
testTracker.drawConnection(1, 2);
testTracker.drawConnection(2, 5)
testTracker.printTracker();
console.log(testTracker.connectionExists(1, 2));
