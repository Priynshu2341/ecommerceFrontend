import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import "../../styles/homepage/product.css";
import { HomePageHeader } from "./HomePageHeader";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "../../store/productThunk";

function HomePage() {
  const dispatch = useDispatch();

  const { content: products, loading, error, last, pageNumber } =
    useSelector((state) => state.products);

  
  const isFetchingRef = useRef(false);
  const hasLoaded = useRef(false);

 
  useEffect(() => {
    if (hasLoaded.current) return;

    dispatch(productsThunk({ page: 0, size: 15}));
    hasLoaded.current = true;
  }, [dispatch]);


  useEffect(() => {
    function handleScroll() {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100;

       

      if (bottom && !isFetchingRef.current && !last) {
        isFetchingRef.current = true;

        dispatch(
          productsThunk({ page: pageNumber + 1, size: 15 })
        ).finally(() => {
          isFetchingRef.current = false;
        });
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageNumber, last, dispatch]);
   
  if (error) {
  return (
    <div className="error-div">
      <p>Pls Wait Server is Waking UP</p>
    </div>
  );
}

if (loading && products.length === 0) {
  return (
    <div className="error-div">
      <p>Pls Wait Server is Waking UP</p>
    </div>
  );
}
 

  return (
    <>
      <HomePageHeader />

      <div className="products-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    
    </>
  );
}

export default HomePage;