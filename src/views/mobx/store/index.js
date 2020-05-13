import { observable} from "mobx";

class Store {
  @observable message = 'i am a message';
}

export default new Store();