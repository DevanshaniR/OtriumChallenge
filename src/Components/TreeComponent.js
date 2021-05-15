/**
 * common Tree component
 */
import TreeView from '@material-ui/lab/TreeView';
import TreeItemComponent from './TreeItemComponent';
function TreeComponent(props) {
  return (
    <TreeView
      defaultExpanded={["root"]}
      multiSelect
    >
      {TreeItemComponent(props.data)}
    </TreeView>
  );
}

export default TreeComponent;