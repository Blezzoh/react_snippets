class Images extends React.Component{
  render(){
    var imgProp = this.props.name;
    var wrap = this.props.wrapper;
    var children = React.Children.map(
      this.props.children,
      function(child) {
        return  <div className= {wrap}><img className={imgProp} src={child}></img> </div>;
      }
    );
    return (
          <div> {children}</div>
          );
  }
}
var imgLinks = ["https://images.freeimages.com/images/large-previews/dfa/jungle-1377573.jpg","https://images.freeimages.com/images/large-previews/647/snowy-mountain-1378865.jpg","https://images.freeimages.com/images/large-previews/4dc/street-1366583.jpg"];

ReactDOM.render(<Images name={'myImgs'} wrapper= {'wrap'}> {imgLinks}</Images>, document.getElementById('container'));
