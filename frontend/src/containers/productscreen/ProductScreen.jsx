import React from "react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div>
      <h1 className="text-center">Ecomerce</h1>
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-md-6 col-lg-4">
              <div className="card-group">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="clearfix mb-3">
                      {" "}
                      <span className="float-start badge rounded-pill bg-primary">
                        ASUS Rog
                      </span>{" "}
                      <span className="float-end price-hp">$1250</span>{" "}
                    </div>
                    <h5 className="card-title">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam quidem eaque ut eveniet aut quis rerum. Asperiores
                      accusamus harum ducimus velit odit ut. Saepe, iste optio
                      laudantium sed aliquam sequi.
                    </h5>
                    <div className="text-center my-4">
                      <a href="#" className="btn btn-warning">
                        View details
                      </a>
                    </div>
                    <div className="clearfix mb-1">
                      <span className="float-start">
                        <i className="far fa-question-circle"></i>
                      </span>
                      <div className="float-end">
                        <button className="btn  btn-circle">
                          <i className="fas fa-shopping-cart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="card my-4 bg-dark text-white">
                  <img
                    src="https://us.123rf.com/450wm/shtanzman/shtanzman1409/shtanzman140900005/31761332-negro-ordenador-de-la-pc-de-escritorio-con-el-teclado-y-el-rat%C3%B3n-y-una-pantalla-azul-con-aplicacione.jpg?ver=6"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">prueba</h5>

                    <p className="card-text">
                      <span className="fw-bold">User: </span>
                      ppppp
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"></li>
                    <li className="list-group-item"></li>
                    
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
