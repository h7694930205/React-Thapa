import React from "react";

function ManuCard({ manuData }) {
  console.log(manuData,"manuData")
  return (
    <>
      <section className="main-card--cointainer">
        {manuData.map((curElem, index) => {
          return (
            <>
              <div className="card-cantainer" key={curElem?.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem?.id}</span>
                    <span className="card-author subtle">{curElem?.name}</span>
                    <h2 className="card-title">{curElem?.name}  </h2>
                    <span className="card-description subtle">{curElem?.description}</span>
                    <div className="card-read"> Read</div>
                  </div>
                  <img scr={curElem?.image} alt='image' className='card-media'/>
                  <span className="card-tag subtile">Oder Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default ManuCard;
