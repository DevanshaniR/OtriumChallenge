/**
 * check box tree main view
 */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TreeComponent from '../Components/TreeComponent';
import TreeItemComponent from '../Components/TreeItemComponent';
import CommonFunctions from '../Functions/CommonFunctions';
import * as actions from '../actions';

function CheckBoxTreeView() {
  const CheckBoxTreeData = CommonFunctions.formatMockResponse();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setCheckBoxTreeData(CheckBoxTreeData));
  }, [dispatch, CheckBoxTreeData]);


  return (
    <TreeComponent
      data={CheckBoxTreeData}
      renderTree={TreeItemComponent(CheckBoxTreeData)}
    />
  );
}

export default CheckBoxTreeView;
