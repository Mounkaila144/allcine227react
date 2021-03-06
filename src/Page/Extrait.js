import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CardActions, Grid} from "@mui/material";
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

import Card from "@mui/material/Card";
import ApiLink from "../components/Api/Api";


const Extrait = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    const [pagecount, setpagecount] = useState(0);
    const [page, setPage] = React.useState(1);


    const url = `https://${ApiLink}/api/pubs.json?page=${page}`
    const getData = async () => {
        axios
            .get(url, {
                headers: {
                    "name": "",
                    "password": ""
                }
            })
            .then(
                (res) => {
                    setIsLoaded(true);
                    setProduct(res.data);
                    setpagecount(50)

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
    }, [page])


    return (
        <Grid container spacing={{xs: 2, md: 2}} columns={{xs: 12, sm: 12, md: 12}}>
            {product.slice(0, 18).map((products) => (
                <Grid item xs={12} sm={12} md={12}>
                    <Card sx={{
                        borderRadius: '4%',
                        boxShadow: 3
                    }}>
                        <Plyr
                            source={{
                                type: 'video',
                                title: products.nom,
                                sources: [
                                    {
                                        src: `https://127.0.0.1:8000/video/${products.videoName}`,
                                        type: 'video/mp4',
                                        size: 360,
                                    },
                                ],
                                poster: `https://127.0.0.1:8000/image/video/${products.imageName}`,
                            }}
                        />
                        <CardActions
                            sx={{}}
                        >
                            <h3>{products.nom}</h3>

                        </CardActions>
                    </Card>
                </Grid>

            ))}
        </Grid>
    )

};
export default Extrait;