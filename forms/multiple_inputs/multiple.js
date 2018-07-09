class FormExample extends React.Component{
  
  constructor(props){
    super(props);
    this.state ={
      favoriteSport: "Baskteball",
      age: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event){
    alert("sport: " + this.state.favoriteSport + "\nage: " + this.state.age );
    event.preventDefault();
  }
  handleChange(event){
    this.setState( {[event.target.name] : event.target.value});
  }
  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          favorite sport:  
          <select name= "favoriteSport" onChange = {this.handleChange} value = {this.state.favoriteSport}>
            <option value="Basketball">Basketball</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Cricket">Cricket</option>
            <option value="Rugby">Rugby</option>
          </select>
        </label>
        <pre></pre>
        <label>
          age:
          <input name="age" type="number" value={this.state.age} onChange = {this.handleChange} />
        </label>
        <label>
          <input type="submit" value="submit" />
        </label>
      </form>
    );
  }
}

ReactDOM.render(<FormExample />, document.getElementById("container"));
