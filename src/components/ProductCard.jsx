export default function ProductCard(props) {
  return (
    <div className="productCard">
      <h1>product{props.product.title}</h1>
      <span>price: {props.product.price}</span>
      <img src={props.product.image}></img>
    </div>
  );
}
