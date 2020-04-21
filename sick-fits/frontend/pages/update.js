import UpdateItem from "../components/UpdateItem";

const Sell = (props) => (
  <div>
    <p>Sell</p>
    <UpdateItem id={props.query.id} />
  </div>
);

export default Sell;
