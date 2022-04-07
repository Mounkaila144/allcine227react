import React from 'react';
import Button from "@mui/material/Button";
import {Menu} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {pink} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";


const Btnderoulan = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const navigate = useNavigate();
    const handclick1=()=>{
        navigate(`${props.lien1}`)
        setAnchorEl(null);
    };
     const handclick2=(event)=>{
        navigate(`${props.lien2}`)
         setAnchorEl(null);
    };
     const handclick3=(event)=>{
        navigate(`${props.lien3}`)
         setAnchorEl(null);
    };
    const handclick4 = (event) => {
        navigate(`${props.lien4}`)
        setAnchorEl(null);
    };


    return (
        <>
            <Button
                variant="contained"
                sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    backgroundColor: pink[900],
                    marginLeft: 2
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {props.name}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                    <MenuItem onClick={() =>handclick1()}>{props.name1}</MenuItem>
                    <MenuItem onClick={() =>handclick2()}>{props.name2}</MenuItem>
                    <MenuItem onClick={() =>handclick3()}>{props.name3}</MenuItem>
                    {props.name4!==undefined ?
                    <MenuItem onClick={() => handclick4()}>{props.name4}</MenuItem> :null}

            </Menu>
        </>
    );
};

export default Btnderoulan;
