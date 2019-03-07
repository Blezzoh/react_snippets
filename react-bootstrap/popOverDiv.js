class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <ButtonToolbar>
        <div onMouseEnter={this.handleClick} onMouseLeave={this.handleClick}>Holy guacamole!</div>

        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Popover bottom">
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}
