class GuessingGame {
	constructor() {
		this.min;
		this.max;
		this.result;
	}

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		return this.result = Math.round((this.min + this.max) / 2);
	}

	lower() {
		this.setRange(this.min, this.result);
	}

	greater() {
		this.setRange(this.result, this.max);
	}
}

module.exports = GuessingGame;
