
/**
 * This function is use to set check box tree drop down data
 * 
 */
export const setCheckBoxTreeData = (data) => {
  console.log('setCheckBoxTreeData :: ', data);
  return (dispatch) => {
    dispatch({ type: 'SET_CHECK_BOX_TREE_DATA', payLoad: data });
  };
};

