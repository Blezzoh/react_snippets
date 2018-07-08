// This one's a little tricky! Comments inline.

class Board extends React.Component {
  render(){
    var className = "board";
    if(this.props.selected){
      className += " selected";
    }
    return (
      <div className = {className}>
      {this.props.index +1 } 
      </div>
    );
  }
}

class BoardSwitcher extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selected_index:0
    }
    this.changeIndex = this.changeIndex.bind(this);
  }
    
  changeIndex (){
    var current = this.state.selected_index;
    if(current === 3){
      current = 0;
    }
    else{
      current += 1;
    }
    this.setState({selected_index: current});
  }
  
  render(){
    var boards = [];
    for(var ii = 0; ii < this.props.numberOfBoards; ii++){
      var isSelected = ii === this.state.selected_index;
      boards.push(<Board index ={ii} selected = {isSelected} key={ii}/>);
    }
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick= {this.changeIndex}>Toggle</button>
      </div>
    );           
  }
}
  
ReactDOM.render(
  <BoardSwitcher numberOfBoards={4} />,
  document.getElementById('container')
);
