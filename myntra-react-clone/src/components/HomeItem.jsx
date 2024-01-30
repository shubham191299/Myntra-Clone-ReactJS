import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = ()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button className="btn-add-bag btn btn-danger" onClick={handleRemoveFromBag}>
          <span className="material-symbols-outlined add_icon">delete</span>
          Remove
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-success"
          onClick={handleAddToBag}
        >
          <span className="material-symbols-outlined add_icon">add_circle</span>
          Add to Bag
        </button>
      )}
    </div>
  );
}

HomeItem.propTypes = {
  item: PropTypes.object.isRequired,
};
