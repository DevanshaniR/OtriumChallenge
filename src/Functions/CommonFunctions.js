import _ from 'lodash';
import mockTree from '../mockResponses/mockTree.json';

/**
 * format back end json response to render in a tree view
 * @returns 
 */
const formatMockResponse = () => {

    const { data = {} } = mockTree;
    const { categories = [] } = data;
    const new_categories = categories.map(value => ({ ...value, children: [] }))
    console.log(new_categories, 'new_categories');

    let parent_items = _.filter(new_categories, { 'parent': '0' });

    let select_all_item = {
        id: "select_all",
        parent: "0",
        name: "Select All",
        children: []
    };

    let remove_all_item = {
        id: "remove_all",
        parent: "0",
        name: "Remove All",
        children: []
    };


    parent_items.forEach(element => {
        recursiveCall(element, new_categories);
    });

    parent_items.unshift(remove_all_item);
    parent_items.unshift(select_all_item);

    return {
        id: 'root',
        name: 'parent',
        children: parent_items
    }
}

/**
 * recursive call to add children
 * @param {*} parent_item 
 * @param {*} categories 
 */
const recursiveCall = (parent_item, categories) => {
    categories.forEach(element => {
        if (parent_item.id === element.parent) {
            parent_item.children.push(element);
            recursiveCall(element, categories);
        }
    });
};

const formatFunctions = {
    formatMockResponse
}

export default formatFunctions;