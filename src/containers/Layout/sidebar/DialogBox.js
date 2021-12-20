import React from "react";
import icons from "../../../shared/img/icon-collections.svg";

export default function DialogBox({ showDialog, setShowDialog }) {
  return (
    <div className={`pop-up ${!showDialog ? "hidden" : ""}`}>
      <div className="card-container">
        <div className="card-top">
          <div className="d-flex justify-content-between">
            <div>
              <h5>Your quick start guide</h5>
              <p>
                <span>LEVEL 1 </span>
                50% completed
              </p>
            </div>
            <svg
              onClick={() => setShowDialog(!showDialog)}
              className="hide-icon"
            >
              <use xlinkHref={`${icons}#blue_arrow_down`} />
            </svg>
          </div>
          <div className="information">
            <svg className="nft">
              <use xlinkHref={`${icons}#nft`} />
            </svg>
            <p>Complete 2 levels and recieve your free NFT </p>
          </div>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-label="progress"
            style={{ width: "25%" }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <div className="card-body">
          <div className="item d-flex">
            <svg className="t-check">
              <use xlinkHref={`${icons}#t-check`} />
            </svg>
            <div>
              <s>Open your account</s>
              <p className="small-text">
                You have successfully opened your account
              </p>
            </div>
          </div>
          <div className="item d-flex">
            <svg className="id">
              <use xlinkHref={`${icons}#id`} />
            </svg>
            <div>
              <p className="normal-text">Verify your identity</p>
              <p className="small-text">Unlock features with your passport</p>
            </div>
          </div>

          <div className="item d-flex bg-secondary">
            <svg className="phone">
              <use xlinkHref={`${icons}#phone`} />
            </svg>
            <div>
              <p className="normal-text">Verify your phone number</p>
              <p className="small-text">
                You have successfully opened your account
              </p>
            </div>
          </div>

          <div className="item d-flex">
            <svg className="account_svg">
              <use xlinkHref={`${icons}#account_svg`} />
            </svg>
            <div>
              <p className="normal-text">Connect your bank account</p>
              <p className="small-text">
                Connect any local bank to your Finvault wallet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
