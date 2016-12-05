export default class ListModel {

  _x;
  _y;

  constructor(store, _x, _y) {
    this.store = store;
    this._x = _x;
    this._y = _y;

  }

  toJS() {
    return {
      store: this.store,
      _x: this._x,
      _y: this._y
    };
  }

  static fromJS(store, object) {
    return new ListModel(store,
      object._x,
      object._y)
  }
}
