import React from "react";


const Book = () => {
    return (
        <div className="card mt-3">
            <div className="card-header">
                <h3>{band.name}</h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={band.img_url} alt="" className={styles.mainThumb}></img>
                    </div>
                    <div className="col-6">
                        <p>{band.info.substr(0, 195)}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-info float-right"

                    onClick={() => { changeCurrentBand(band) }}
                >Read more</button>
            </div>
        </div>
    )
}

export default Book;