import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductRequest, productSelector } from "../../reducers/product";

const Product = () => {
  const { productItem, isLoad } = useSelector(productSelector);
  const dispatch = useDispatch();
  const { categoryName, id } = useParams();
  React.useEffect(() => {
    dispatch(getProductRequest(categoryName, id));
  }, [categoryName, id]);
  return <div>Product!!!</div>;
};

export default Product;
