class Greeter {
  greet() {
    console.log("Hello, ", this.getName())
  }

  protected getName() {
    return 'Nobody'
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}

const g = new SpecialGreeter();
g.greet();
g.howdy();
// g.getName()

export default Greeter;
