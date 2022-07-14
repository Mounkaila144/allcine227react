import React from 'react';
import Box from "@mui/material/Box";
import Buttondetail from "./Serie/buttonsaison";



const DetailSaison = ({product,saison}) => {

    return (
        <Box component="div" sx={{overflow: 'auto', marginTop: 2, fontSize: 15}}>

            Saison : {saison.map((genres) => (
               <Buttondetail genres={genres} product={product}/>

        ))}
        </Box>
    );
};

export default DetailSaison;