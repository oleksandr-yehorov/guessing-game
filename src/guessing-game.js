class GuessingGame {
    constructor() { }

    // Setting minimum and maximum range value

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    // Guess function returns the lowest integer, greater
    // than average of min and max range

    guess() {
        return Math.ceil((this.min + this.max) / 2);
    }

    // Set a new maximum value

    lower() {
        this.max = this.guess();
    }

    // Set a new minimum value

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;