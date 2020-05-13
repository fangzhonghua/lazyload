/* import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');
  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import('./print').then(module => {
    var print = module.default;

    print();
  });
  return element;
}
document.body.appendChild(component()); */

import React from "react";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";

const LoadableComponent = loadable(() => import("./print.jsx"), {
  fallback: <div>加载中。。。</div>
});
class Index extends React.Component {
  constructor(props){
    super(props)
    this.state={
      show:false
    }
    this.LoadableComponent=null;
  }
  handleClick = () => {
    this.setState({
      show:true
    })
  }
  render(){
    const { show } = this.state;
    return (<div>
      {show&&<LoadableComponent/>}
      <button onClick={this.handleClick}>IndexPage</button>
      </div>)
  }
}

ReactDOM.render(<Index/>, document.getElementById("root"));