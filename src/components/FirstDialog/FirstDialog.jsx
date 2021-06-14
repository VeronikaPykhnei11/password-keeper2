import "./FirstDialog.scss";

export default function FirstDialog() {
  return (
    <div className="container mt-4 d-flex justify-content-center dialog-wrapper">
      <div className="col-lg-8 px-0 ">
        <div className="first-line-dialog row mx-0">
          <div className="col-1 pr-0 d-flex align-items-center justify-content-end">
            <div className="red"></div>
          </div>
          <div className="col-1 px-0 d-flex align-items-center justify-content-center">
            <div className="yellow"></div>
          </div>
          <div className="col-1 pl-0 d-flex align-items-center justify-content-start">
            <div className="green"></div>
          </div>
        </div>
        <div className="second-line-dialog row mx-0">
          <div className="col-lg-12 second-col-dialog px-0">
            <div className="row mt-5 ml-1">
              <div className="col-3 d-flex justify-content-center thumbnail image-wrapper">
                <img
                  src="https://gif-avatars.com/img/90x90/agnes-check.gif"
                  className="img-fluid"
                />
              </div>
              <div className="col-9 d-flex align-items-center">
                <p>Oh no... I forgot the password to the mail again.</p>
              </div>
            </div>
            <div className="row ml-1 mt-5">
              <div className="col-3 d-flex justify-content-center image-wrapper">
                <img
                  src="https://gif-avatars.com/img/90x90/donald-duck-x.gif"
                  className="img-fluid"
                />
              </div>
              <div className="col-9 d-flex align-items-center">
                <p>
                  Use <b>Crack_it</b> and your passwords will always be at hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
