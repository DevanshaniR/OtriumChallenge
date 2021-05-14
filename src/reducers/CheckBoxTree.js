
const INITIAL_STATE = {
    check_box_tree_data: {}
};
const CheckBoxTree = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CHECK_BOX_TREE_DATA':
            console.log('SET_CHECK_BOX_TREE_DATA', action);
            return {
                ...state,
                check_box_tree_data: action.payLoad
            }
        default:
            return state
    }
}

export default CheckBoxTree;