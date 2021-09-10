import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../../store/products/actions";
import { addToCart } from "../../store/cart/actions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      <h1 className="text-center">Ecomerce</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          <div className="container">
            <div className="row">
              <div className="col col-md-6 col-lg-4">
                <div className="card-group">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="clearfix mb-3">
                        {" "}
                        <span className="float-start badge rounded-pill bg-primary">
                          {product.name}
                        </span>{" "}
                        <span className="float-end price-hp">
                          ${product.price}
                        </span>{" "}
                      </div>
                      <h5 className="card-title">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Veniam quidem eaque ut eveniet aut quis rerum.
                        Asperiores accusamus harum ducimus velit odit ut. Saepe,
                        iste optio laudantium sed aliquam sequi.
                      </h5>
                      <div className="text-center my-4">
                        <a href="#" className="btn btn-warning">
                          View details
                        </a>
                      </div>
                      <p>
                        Status:
                        <span>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </span>
                      </p>
                      <p>
                        Qty
                        <select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </p>

                      <div className="clearfix mb-1">
                        <span className="float-start">
                          <i className="far fa-question-circle"></i>
                        </span>
                        <div className="float-end">
                          <button
                            className="btn  btn-circle"
                            onClick={addToCartHandler}
                          >
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
      )}
    </div>
  );
};

export default ProductScreen;
