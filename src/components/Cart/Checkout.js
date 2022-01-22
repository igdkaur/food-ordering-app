import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div classes =  {classes.control}>
        <label htmlFor="name">Name</label>
        <input type = "text" id="name"/>
      </div>
      <div classes =  {classes.control}>
        <label htmlFor="street">Street</label>
        <input type = "text" id="street"/>
      </div>
      <div classes =  {classes.control}>
        <label htmlFor="postal">Postal</label>
        <input type = "text" id="postal"/>
      </div>
      <div classes =  {classes.control}>
        <label htmlFor="city">City</label>
        <input type = "text" id="city"/>
      </div>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
