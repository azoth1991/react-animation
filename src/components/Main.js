import React from 'react';
import {observer} from 'mobx-react';
import 'react-fastclick';
import '../less/index.less'
import LoveIcon from './LoveIcon'

@observer
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    let {listStore} = this.props;
  }

  moveSlide(e,that){
    let {listStore} = that.props;
    listStore.pushList(e.touches[0].pageX,e.touches[0].pageY)
  }

  render() {
    const {listStore} = this.props;

    return (
      <div className="stage" onMouseMove={(e)=>{this.moveSlide(e,this)}} onTouchMove={(e)=>{this.moveSlide(e,this)}}>
          {listStore.list.map((value,key)=>{
            return <LoveIcon postions={value} key={key} />
          })}
      </div>
    );
  }

}

