function Potion(name) {
    this.name = name;

    if (this.name === 'health') {
        this.valve = Math.floor(Math.random() * 10 + 30);
    } else {
        this.valve = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;