var items =  [
  "1 lb Salmon",
  "1 cup Pine Nuts",
  "2 cups Butter Lettuce",
  "1 Yellow Squash",
  "1/2 cup Olive Oil",
  "3 cloves of Garlic"
 ];

var list = React.createElement("ul", {className: "ingredients"}, items.map(
  (item, i)=> {
    return React.createElement("li", {key: i, className: "list-item"}, item);
  }
  )
); 

var header = React.createElement("h1", {id: "title", className:"title"}, "Baked Salmon");
var dish = React.createElement("section", {className: "salmon"}, header, list);

export default dish;
