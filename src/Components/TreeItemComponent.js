import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TreeItem from '@material-ui/lab/TreeItem';
import { FormControlLabel, Checkbox } from "@material-ui/core";
import _ from 'lodash';
import * as actions from '../actions';
function TreeItemComponent(nodes) {
  console.log('TreeItemComponent', nodes);
  const CheckBoxTree = useSelector(state => state.CheckBoxTree);
  const { check_box_tree_data = {} } = CheckBoxTree;
  const { children: check_box_children = [] } = check_box_tree_data;

  const dispatch = useDispatch();
  return (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <FormControlLabel
          control={
            <Checkbox
              checked={nodes.checked}
              style={{
                color: 'grey'
              }}
              onChange={e => onCheckBoxChange(e, nodes)}
            />
          }
          label={nodes.name}
          key={nodes.id}
        />
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map(child_node => TreeItemComponent(child_node))
        : null}
    </TreeItem>
  );

  function onCheckBoxChange(e, node_data) {
    console.log('onCheckBoxChange ::', e.target.checked, node_data.id);
    if (node_data.id === 'select_all') {
      // let select_all_items = CommonFunctions.selectAll();
      // console.log('onCheckBoxChange :: select_all_items', select_all_items);
      // check_box_tree_data.children = select_all_items;
      // dispatch(actions.setCheckBoxTreeData(check_box_tree_data));
    }
    if (node_data.parent === '0') {
      let selected_item = _.find(check_box_children, { 'id': node_data.id });
      selected_item.checked = true;
    } else {
      let parent_items = _.filter(check_box_children, { 'parent': node_data.parent });
      console.log('onCheckBoxChange ::parent_item', parent_items);
      let checked_item = _.filter(parent_items.children, { 'id': node_data.id });
      checked_item.checked = true;
    }
    check_box_tree_data.children = check_box_children;
    dispatch(actions.setCheckBoxTreeData(check_box_tree_data));

  }
}

export default TreeItemComponent;