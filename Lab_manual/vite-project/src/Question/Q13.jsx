function Item(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>Item Details</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Cost:</b> ₹{props.cost}</p>
      <p><b>Type:</b> {props.type}</p>
    </div>
  );
}

function Feedback(props) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Feedback Details</h2>
      <p><b>ID:</b> {props.id}</p>
      <p><b>Title:</b> {props.title}</p>
      <p><b>Detail:</b> {props.detail}</p>
      <p><b>Rating:</b> ⭐ {props.rating}</p>
    </div>
  );
}


function ItemDetail() {
  return (
    <div>
      <h1>Item & Feedback Information</h1>

      {/* Passing Props */}
      <Item name="Laptop" cost="50000" type="Electronics" />

      <Feedback 
        id="101"
        title="Great Product"
        detail="Performance is very fast and smooth."
        rating="5"
      />
    </div>
  );
}
export {Item,Feedback,ItemDetail}