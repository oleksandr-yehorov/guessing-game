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
        this.value = Math.ceil((this.min + this.max) / 2);
        return this.value;
    }

    // Set a new maximum value

    lower() {
        this.max = this.value;
    }

    // Set a new minimum value

    greater() {
        this.min = this.value;
    }
}

module.exports = GuessingGame;