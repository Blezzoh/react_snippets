
 class Dish extends React.Component{
  constructor (props){
    super(props);
  }

  renderListItem(ingredient, i) {
    return React.createElement("li", { key: i }, ingredient)
  }

  render(){
    const items = this.props.items;

    return (
    <section>
      <h1> {this.props.header}</h1>
      <ul>
        {items.map((item, i) => 
          {return (<li key ={i}> {item} </li>)}
        )}
      </ul>
    </section>
    );
  }
}
var items =  [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"
 ];


const dish = React.createElement(Dish, {items, header:" Baked Salmon"}, null);

ReactDOM.render("hi", document.getElementById('root'));
