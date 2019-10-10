class GuessingGame {
    
    setRange(min, max) {
        this.min = min;
    	this.max = max;
    }

    guess() {
        this.rightNumber = Math.round((this.max + this.min) / 2);
    	return this.rightNumber;
    }

    lower() {
        this.max = this.rightNumber;
    }

    greater() {
        this.min = this.rightNumber;

    }
}

module.exports = GuessingGame;
