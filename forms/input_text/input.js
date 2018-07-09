class FormExample extends React.Component{
  
  constructor(props){
    super(props);
    this.state ={
      favoriteSport: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event){
    alert(this.state.favoriteSport);
    event.preventDefault();
  }
  handleChange(event){
    this.setState({favoriteSport: event.target.value});
  }
  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          favorite sport:   
          <input type="text" value={this.state.favoriteSport} onChange={this.handleChange}/>
        </label>
        <label>
          <input type="submit" value="submit" />
        </label>
      </form>
    );
  }
}

ReactDOM.render(<FormExample />, document.getElementById("container"));
