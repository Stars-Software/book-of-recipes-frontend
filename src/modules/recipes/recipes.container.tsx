// import React, { useEffect, useState } from "react";
// import { connect, ConnectedProps, useSelector } from "react-redux";
// import { bindActionCreators } from "@reduxjs/toolkit";
// import { AppDispatch, RootState } from "../../redux/store/store";
// import AuthRedirect from "../auth/auth.container";
// import { ProductsList } from "./components/recipes.page";
// import Preloader from "../common/components/preloader/preloader";
// import {
//   fetchProductCategories,
//   fetchProducts,
// } from "../../redux/thunks/products.thunks";

// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return bindActionCreators(
//     { f },
//     dispatch
//   );
// };

// const connector = connect(null, mapDispatchToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;

// const RecipeContainer: React.FC<PropsFromRedux> = ({
//   // fetchProductCategories,
//   // fetchProducts,
// }) => {
//   const [filter, setFilter] = useState<string>("");
//   const { data, categories } = useSelector(
//     (state: RootState) => state.products
//   );

//   useEffect(() => {
//     fetchProductCategories();
//   }, [fetchProductCategories]);

//   useEffect(() => {
//     fetchProducts(filter);
//   }, [fetchProducts, filter]);

//   if (!data || !categories) {
//     return <Preloader />;
//   }

//   console.log("render");

//   return (
//     <ProductsList
//       list={data}
//       categories={categories}
//       filter={filter}
//       filterHandler={setFilter}
//     />
//   );
// };

// export default connector(AuthRedirect(RecipeContainer));
