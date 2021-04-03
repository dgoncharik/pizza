import React from 'react';
import PropTypes from "prop-types";

const Categories = React.memo(({items, activeItem, onClickItemCallback}) => {

  const onClickItem = (index) => {
    if (onClickItemCallback) {
      onClickItemCallback(index)
    }
  }

  return (
      <div className="categories">
        <ul>
          <li className={activeItem === null ? "active": ""} onClick={() => onClickItem(null)}>Все</li>
          {
            items?.map((item, index) => <li className={activeItem === index ? "active" : ""} onClick={() => onClickItem(index)} key={item}>{item}</li>)
          }
        </ul>
      </div>
  )
})

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.number,
  onClickItemCallback: PropTypes.func,
}

Categories.defaultProps = {
  items: [],
  activeItem: null
}

export default Categories;