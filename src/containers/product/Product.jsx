import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getProductRequest,
  productSelector,
  realyProductItemsSelector,
} from "../../reducers/product";

const Product = () => {
  const { productItem, isLoad } = useSelector(productSelector);
  const realyItems = useSelector(realyProductItemsSelector);
  const dispatch = useDispatch();
  const { categoryName, id } = useParams();
  React.useEffect(() => {
    dispatch(getProductRequest(categoryName, id));
  }, [categoryName, id]);
  console.log(realyItems, "ITEMS");
  return (
    <>
      <h1>Count props {realyItems?.length || 0}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {realyItems?.length > 0 &&
          realyItems.map((item) => {
            return (
              <Fragment key={item}>
                <span>{item}</span>{" "}
                <span style={{ fontWeight: "700" }}>{productItem[item]}</span>
              </Fragment>
            );
          })}
      </div>
    </>
  );
};

export default Product;
