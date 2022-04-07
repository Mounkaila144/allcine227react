import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useEffect, useState} from "react";
import axios from "axios";
import {Backdrop, CircularProgress} from "@mui/material";
import PubCard from "../components/card/PubCard";
import {orange, red} from "@mui/material/colors";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Menu() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState([]);

    const url = `https://allcine227.com/api/pubs.json?`
    const getData = async () => {
        axios
            .get(url)
            .then((res) => {
                setIsLoaded(true);
                setProduct(res.data);
                setpagecount(50)

            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }
    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
    }, [])
    if (error) {
        return <h1>Erreur de chargement veuiller recharger la page</h1>
    } else if (!isLoaded) {
        return (
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={true}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        )
    } else {
        return (
            <Grid container spacing={{xs: 1, md: 2}} columns={{xs: 12, sm: 12, md: 12}}>
                <Grid item xs={12} sm={12} md={12} >
                    <Box component="div" sx={{overflow: 'auto', bgcolor: orange[500], fontSize: 22, marginBottom:2,marginTop:2}}>
                        <MonetizationOnIcon sx={{ fontSize: 50 }}/><br/>
                            Nos tarifs<br/>
                        👉🏾👉🏾 series<br/>
                        1 saison a 500f<br/>
                        2 saisons a 1000f<br/>
                        3 saisons a 1500f<br/>
                        🥳 a partir de 2000f,beneficiez d une saison bonus de votre choix.<br/>
                        👉🏾👉🏾 films/animés<br/>
                        1 film a 200f ou 3 films a 500f.<br/>
                        👉🏾👉🏾 mangas<br/>
                        40 épisodes  a 500f<br/>
                        🛵<DeliveryDiningIcon/> Livraison : 1000f<br/>

                        🥳Si vous payez une clé USB ou carte mémoire,vous bénéficierez d'un  remplissage gratuit(De votre choix).
                    </Box>
                </Grid>
                {product.map((products) => (
                    <Grid item xs={12} sm={12} md={4}>
                        <PubCard products={products}/>
                    </Grid>
                    ))}

            </Grid>

        )

    }
}
