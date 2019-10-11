class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = Math.ceil((this.min + this.max) / 2);
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