import NavBarReducer, {AddCategory} from "../Redux/NavBarReducer";

it('add new category', function () {
    let action = AddCategory('tikitok')
    let state = {
        categories: [
            {id: 0, category: 'Дом'},
            {id: 1, category: 'Семья'},
            {id: 2, category: 'Работа'},
            {id: 3, category: 'Спорт'},
        ]
    }
    let newState = NavBarReducer( state, action)

    expect(newState.categories.length).toBe(5)

    // expect(newState.categories[3].category).toBe('tikitok')
});