import React from "react";

const Redirect = props => {
    
  const handleRedirectClick = () => {
    const { history } = props;
    if (history) history.push("/about");
    else console.log(`history not found in props`);
  };

  return (
    <div>
      <div>
        <button onClick={handleRedirectClick}>Redirect</button>
      </div>
    </div>
  );
};

export default Redirect;
