import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';



const useStyles = makeStyles({
    root: {
      height: 400,
      flexGrow: 10,
      maxWidth: 300,
      paddingTop:-50
    },
    heading:{
        fontSize:50
    }
});
  
  export default function FileSystemNavigator() {
    const classes = useStyles();
  
    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}        
        >
            <TreeItem className={classes.heading}  nodeId="1" label="Most common symptoms">
                <TreeItem nodeId="2"  label="fever" />
                <TreeItem nodeId="3"  label="dry cough" />
                <TreeItem nodeId="4"  label="tiredness" />
            </TreeItem>
            <TreeItem nodeId="5" label="Less common symptoms">
                <TreeItem nodeId="6" label="aches and pains" />
                <TreeItem nodeId="7" label="sore throat" />
                <TreeItem nodeId="8" label="diarrhoea" />
                <TreeItem nodeId="9" label="conjunctivitis" />
                <TreeItem nodeId="10" label="headache" />
                <TreeItem nodeId="11" label="loss of taste or smell" />
                <TreeItem nodeId="12" label="skin rashes, or discolouration of fingers or toes" />
            </TreeItem>
            <TreeItem nodeId="13" label="Serious symptoms">
                <TreeItem nodeId="14" label="difficulty breathing or shortness of breath" />
                <TreeItem nodeId="15" label="chest pain or pressure" />
                <TreeItem nodeId="16" label="loss of speech or movement" />
            </TreeItem>
            
            
        </TreeView>
    );
}

