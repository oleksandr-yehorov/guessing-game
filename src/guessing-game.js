class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = ((this.start + this.end) / 2);
        return this.value;
    }

    lower() {
        
    }

    greater() {
       
    }
}

module.exports = GuessingGame;
