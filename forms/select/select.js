class FormExample extends React.Component{
  
  constructor(props){
    super(props);
    this.state ={
      favoriteSport: "Baskteball"
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
          <select onChange = {this.handleChange} value = {this.state.favoriteSport}>
            <option value="Basketball">Basketball</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Cricket">Cricket</option>
            <option value="Rugby">Rugby</option>
          </select>
        </label>
        <label>
          <input type="submit" value="submit" />
        </label>
      </form>
    );
  }
}

ReactDOM.render(<FormExample />, document.getElementById("container"));
