import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";


const SortPopup = React.memo(({items, sortBy, onClickTypeSortCallback, onClickOrderSortCallback}) => {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const activeItemLabel = items.find(obj => obj.type === sortBy.type)?.name;

  const sortRef = useRef();

  useEffect(() => {
    document.addEventListener('click', onOutsideClick);
    //return document.removeEventListener('click', onOutsideClick);
  },[])

  function onOutsideClick(evt) {
    const path = evt.path || (evt.composedPath && evt.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  }

  function toggleVisiblePopup() {
    setVisiblePopup(visiblePopup => !visiblePopup);
  }

  function onClickTypeSort(evt, index) {

    if (onClickTypeSortCallback) {
      onClickTypeSortCallback(items[index].type)
    }
    setVisiblePopup(false);

  }

  function onClickOrderSort() {
    if (onClickOrderSortCallback) {
      onClickOrderSortCallback();
    }
  }

  return (
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <svg onClick={onClickOrderSort} className={classNames({"rotated": sortBy.order === "asc"})}
              width="12"
              height="8"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={toggleVisiblePopup}>{activeItemLabel}</span>
        </div>
        {visiblePopup &&
        <div className="sort__popup">
          <ul>
            {
              items?.map((item, index) => (
                  <li
                      key={item.type}
                      className={classNames({"active": item.type === sortBy.type})}
                      onClick={(evt) => onClickTypeSort(evt, index)}
                  >
                    {item.name}
                  </li>
              ))
            }
          </ul>
        </div>}
      </div>
  )
})

SortPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortBy: PropTypes.object.isRequired,
  onClickTypeSortCallback: PropTypes.func,
  onClickOrderSortCallback: PropTypes.func
}

SortPopup.defaultProps = {
  items: []
}

export default SortPopup;