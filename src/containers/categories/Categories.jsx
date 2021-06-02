import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCategories } from "../../actions/categoriesActions";
import { Link } from "react-router-dom";

class Categories extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.categoryName !==
      this.props.match.params.categoryName
    ) {
      this.props.getCategories(this.props.match.params.categoryName);
    }
  }
  componentDidMount() {
    const {
      getCategories,
      match: { params },
    } = this.props;
    getCategories(params.categoryName);
  }
  render() {
    const {
      match: { params },
      categories,
    } = this.props;

    const { categoryItems, loading } = categories;

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
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = {
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
