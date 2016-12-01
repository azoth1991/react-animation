import {observable, action} from 'mobx';
import Server from '../api/server';
import tools from '../lib/tools'
import ListModel from '../models/ListModel'

export default class ListStore {
    @observable list = [];

    toJS() {
        return this.list.map(item => item.toJS());
    }


    static fromJS(array, nav) {
        const listStore = new ListStore();
        listStore.list = array.map(function (oneList) {
            return ListModel.fromJS(listStore, oneList);
        });
        return listStore;
    }
}
