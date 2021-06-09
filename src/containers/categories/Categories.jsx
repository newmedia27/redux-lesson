import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCategories } from "../../actions/categoriesActions";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

function Categories({ categories, getCategories }) {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  useEffect(() => {
    console.log(location.search, "RENDER!!!!!");
    let url = [params.categoryName];
    if (location.search) {
      url.push(location.search);
    }
    getCategories(url.join(""));
  }, [params.categoryName, location.search]);

  const { categoryItems, loading } = categories;

  const handleSubmit = (value) => {
    query.set("page", value);
    console.log(query.toString());
    history.push({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  console.log(`location`, location);
  return (
    <>
      {loading ? (
        <div>LOAD CATEGORY</div>
      ) : (
        <div>
          <h1>Welcome To {params.categoryName}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {categoryItems?.length > 0 &&
              categoryItems.map((category) => {
                const arr = category.url.split("/");
                const id = arr[arr.length - 2];
                return (
                  <Link
                    key={category.name || category.title}
                    to={`/product/${params.categoryName}/${id}`}
                  >
                    {category.name || category.title}
                  </Link>
                );
              })}
          </div>
          <Paginator onSubmit={handleSubmit} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

function Paginator({ onSubmit }) {
  const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: " 50px" }}>
      <input ref={ref} type="text" />
      <button type="submit">go page</button>
    </form>
  );
}
