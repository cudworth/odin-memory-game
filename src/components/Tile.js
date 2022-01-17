import "./Tile.css";

function Tile(props) {
  return (
    <div className="Tile margin padding" onClick={props.onClick}>
      <img src={props.image} alt={props.alt} />
    </div>
  );
}
export default Tile;
