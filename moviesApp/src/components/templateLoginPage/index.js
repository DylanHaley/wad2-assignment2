import React from "react";

const TemplateLoginPage = ({children}) => {
  return (
      <>
        <div className="row">
            <div className="col-3">{children}</div>
            <p> Please Login to see movies, or sign up and make an account!</p>
        </div>
      </>
  );
};

export default TemplateLoginPage;