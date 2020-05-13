import { observable, action } from "mobx";

class Store {
  @observable message = 100;
  @action add() {
    this.message += 100
  };
  @action sub() {
    this.message -= 100
  };
}

export default new Store();