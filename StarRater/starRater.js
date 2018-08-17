import React, { Component } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';


class StarRating extends Component {
  constructor(props){
    super(props);
    this.state = {
      stars_selected: 0
    }
  }
  change(stars_selected){
    this.setState({stars_selected});
  }
  render(){
    const {totalStars} = this.props;
    const {stars_selected} = this.state;
    return (
      <div className="star-rating">
        {
          [...Array(totalStars)].map(
            (item, i) => 
              <Star 
                key={i}
                selected = {i<stars_selected}
                onClick = {() => this.change(i+1)}

              />
            )
        }
        <p> 
          {stars_selected} of {totalStars} stars
        </p>
      </div>
    );
  }
}

StarRating.propTypes= {
  totalStars: PropTypes.number
}
StarRating.defaultProps = {
  
}
export default StarRating;
