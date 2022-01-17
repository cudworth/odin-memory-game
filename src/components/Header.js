import "./Header.css";

function Header(props) {
  return (
    <div className="Header flex-row space-bet padding">
      <div className="flex-col justify-ctr">
        <div className="title margin">Odin Memory Game</div>
        <div className="italic margin">
          Get points by clicking on an image but don't click on any more than
          once!
        </div>
      </div>
      <div className="flex-col justify-ctr align-end">
        <div className="margin bold">Current Game Score: {props.gameScore}</div>
        <div className="margin bold">High Score: {props.highScore}</div>
      </div>
    </div>
  );
}
export default Header;
