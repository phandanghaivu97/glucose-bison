import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name"]

  index() {
    // Your logic here, e.g., alert the name
    alert(`Hello, ${this.nameTarget.value}!`);
  }
}
