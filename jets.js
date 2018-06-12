class Jet {
  constructor(color, size){
    this.color = color;
    this.size = size;
  }
  fly () {
    console.log('whoosh!');
  }
}

module.exports = Jet;