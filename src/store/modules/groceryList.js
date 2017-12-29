function dynamicSort(property) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

const state = {
    groceryList: [],
    categories: [
        {id: 1, name: 'Grocery'},
        {id: 2, name: 'Vegetable'},
        {id: 3, name: 'Fruit'},
        {id: 4, name: 'Food'},
        {id: 5, name: 'Meat'},
        {id: 6, name: 'Paper Goods'},
        {id: 7, name: 'Baby'},
        {id: 8, name: 'Clothing'},
        {id: 9, name: 'Electronics'},
        {id: 10, name: 'Dairy'}
    ]
};

const mutations = {
    addItem ( state, payload) {
        console.log(payload);
        state.groceryList.push(payload);
    }
};

const actions = {

};

const getters = {
    getFullList: (state, getters) => {
        return state.groceryList;
    },
    getCategories: (state) => {
        return state.categories.sort(dynamicSort("name"));
    },
    getNextId: (state, getters) => {

        const groceryList = getters.getFullList;
        let nextId = 0;
        for(let i = 0; i < groceryList.length; i++) {
            if(groceryList[i].id > nextId){
                nextId = groceryList[i].id;
            }
        }
        return nextId + 1;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}