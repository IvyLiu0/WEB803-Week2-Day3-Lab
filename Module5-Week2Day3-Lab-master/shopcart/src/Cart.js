import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Cart = (props) => {
  return (
    <ListGroup>
      <h3 className="CartItems">Your cart items</h3>
      {props.itemList.map((item) => {
        if (item.value > 0) {
          return (
            <ListGroupItem key={item.id}>
              <div>
                <img className="CartImage"
                  src={item.image}
                  alt={item.desc}
                  height="120"
                  width="120"
                />
                <h5 className="CartItem">{item.desc} 
                {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
                Quantity: {item.value}
                </h5>
              </div>
            </ListGroupItem>
          );
        }
      })}
    </ListGroup>
  );
};