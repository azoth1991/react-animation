import {observable, action} from 'mobx';

export default class ListStore {
  @observable list = [];
  constructor(){
    let that = this;
    setInterval(()=>{
      that.list.map((v,k)=>{
        that.list[k].style.top++;
      })
    },1000);
  }



  @action pushList(x,y){
    this.list.push({style:{left:x,top:y}});
  }

}
