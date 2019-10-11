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
        this.min = this.value;
    }

    greater() {
        this.max = this.value;
    }
}

module.exports = GuessingGame;
