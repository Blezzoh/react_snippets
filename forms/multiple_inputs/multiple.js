class FormExample extends React.Component{
  
  constructor(props){
    super(props);
    this.state ={
      favoriteSport: "Baskteball",
      age: "", 
      isActive: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event){
    let active = this.state.isActive ? "yes" : "no";
    alert("sport: " + this.state.favoriteSport + "\nage: " + this.state.age + "\nstill active? " + active);
    event.preventDefault();
  }
  handleChange(event){
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value ;
    this.setState( {[event.target.name] : value});
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
        <pre></pre>
        <label>
          still active?: 
          <input type= "checkbox" name="isActive" checked = {this.state.isActive}  onChange = {this.handleChange}/>
        </label> 
        <pre></pre>
        <label>
          <input type="submit" value="submit" />
        </label>
      </form>
    );
  }
}

ReactDOM.render(<FormExample />, document.getElementById("container"));
