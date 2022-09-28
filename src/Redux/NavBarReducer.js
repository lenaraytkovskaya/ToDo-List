const ADD_CATEGORY = 'GET_CATEGORY'

let initialState = {
    categories: [
        {id: 0, category: 'Дом'},
        {id: 1, category: 'Семья'},
        {id: 2, category: 'Работа'},
        {id: 3, category: 'Спорт'}
    ],
    newCategoryText: ''
}

const NavBarReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_CATEGORY:
            return{
                ...state,
                newCategoryText: '',
                categories: [...state.categories, {id: 4, category: action.newCategoryText}]
            }
        default:
            return{
                ...state
            }
    }
}
let store = window.store

export const AddCategory = (newCategoryText) => ({ type: ADD_CATEGORY, newCategoryText: newCategoryText })

export default NavBarReducer;