import { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../../styles/homepage/product.css";
import { HomePageHeader } from "./HomePageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { productsThunk } from "../../store/productThunk";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const pageFromUrl = Math.max(0, parseInt(searchParams.get("page")) || 0);
  const sizeFromUrl = Math.max(1, parseInt(searchParams.get("size")) || 10);

  const productPage = useSelector((state) => state.products);
  const { content: products, loading, error, first, last, totalPages } = productPage;

  
  useEffect(() => {
    dispatch(productsThunk({ page: pageFromUrl, size: sizeFromUrl }));
  }, [dispatch, pageFromUrl, sizeFromUrl]);

  function setNewPage(newPage) {
    if (newPage < 0 || newPage >= totalPages) return;

    setSearchParams({
      page: newPage,
      size: sizeFromUrl,
    });
  }

  if (error) return <p>{error}</p>;

  return (
    <>
      <HomePageHeader />

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="products-container">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="page-btn-div">
            <button
              className="page-btn"
              disabled={first}
              onClick={() => setNewPage(pageFromUrl - 1)}
            >
              ← Prev
            </button>

            <span className="page-info">
              Page {pageFromUrl + 1} of {totalPages}
            </span>

            <button
              className="page-btn"
              disabled={last}
              onClick={() => setNewPage(pageFromUrl + 1)}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;