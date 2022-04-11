import * as React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Dialog,DialogTitle } from '@mui/material';

class SimpleDialog extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            open: this.props.open,
            //TODO: parse the message and assemble them into readible text
        }
    }
    render(){
        return (   
            <Dialog open={this.props.open} onClose = {this.props.onClose}>
              <DialogTitle>
                  {this.props.message}
              </DialogTitle>
            </Dialog>
        );
    }
}
class TerritoryDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dialogOpen :false,
        }
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleOpenDialog(){
        this.setState({dialogOpen:true});
    }
    handleClose(){
        this.setState({dialogOpen:false});
    }
    render(){
        return(
            <>
                <Button onClick={this.handleOpenDialog} style={{backgroundColor:this.props.color,color:"white"}} id = {this.props.id}>
                    {this.props.buttonDisplayMessage}</Button>
                <SimpleDialog open = {this.state.dialogOpen} 
                onClose ={this.handleClose} 
                message = {this.props.textMessage}>
                </SimpleDialog>
            
            </>
        )
    }
};
export default TerritoryDetail