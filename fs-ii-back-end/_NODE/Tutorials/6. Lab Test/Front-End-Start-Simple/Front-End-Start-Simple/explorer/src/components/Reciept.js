// import "./Reciept.css";

function Reciept(props) {
  return (
    <div className="Box">
      <div className="Title">Reciept</div>
      <div className="Padding">
        <div className="Line">
          <div className="Label">Transaction Hash:</div>
          <div className="Text">{props.transaction["Transaction Hash"]}</div>
        </div>
        <div className="Line">
          <div className="Label">Block Hash:</div>
          <div className="Text">{props.transaction["Block Hash"]}</div>
        </div>
        <div className="Line">
          <div className="Label">Block Number:</div>
          <div className="Text">{props.transaction["BlockNumber"]}</div>
        </div>
        <div className="Line">
          <div className="Label">Gas Used:</div>
          <div className="Text">{props.transaction["Gas Used"]}</div>
        </div>
        <div className="Line">
          <div className="Label">From:</div>
          <div className="Text">{props.transaction.From}</div>
        </div>
        <div className="Line">
          <div className="Label">To:</div>
          <div className="Text">{props.transaction.TO}</div>
        </div>
        <div className="Line">
          <div className="Label">Amount:</div>
          <div className="Text">{props.transaction.Value}</div>
        </div>
      </div>
    </div>
  );
}

export default Reciept;
