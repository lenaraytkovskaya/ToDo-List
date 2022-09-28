import React from 'react';
import Categories from "./Categories";
import {connect} from "react-redux";
import {AddCategory} from "../../../Redux/NavBarReducer";

let mapStateToProps = (state) => {
    return {
        state: state.navbar,
        newCategoryText: state.navbar.newCategoryText
    }
}
let CategoriesContainer = connect(mapStateToProps, {AddCategory})(Categories)
export default CategoriesContainer