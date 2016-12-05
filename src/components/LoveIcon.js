import React from 'react';
import {observer} from 'mobx-react';
import 'react-fastclick';

@observer
export default class LoveIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles:{
      }
    }


  }
  componentWillMount(){
    const {postions} = this.props;
    let that = this;
    this.setState({
      styles:{
        top:postions.style.top,
        left:postions.style.left,
      }
    });
    let dir = true;
    setInterval(()=>{
      dir=dir?false:true;
      let horizenNum = Math.random()*100-50;
      let verticalNum = Math.random()*50+100;
      let rotateNum = Math.random()*30;
      this.setState({
        styles:{
          top:this.state.styles.top?that.state.styles.top+verticalNum:postions.style.top+verticalNum,
          left:this.state.styles.left?that.state.styles.left+horizenNum:postions.style.left,
          transform:dir?'rotate('+rotateNum+'deg)':'rotate(-'+rotateNum+'deg)'
        }
      });
    },Math.random()*500+200);

  }


  render() {
    const {postions} = this.props;
    return (
      <div className="love-icon" style={this.state.styles}></div>
    );
  }

}

