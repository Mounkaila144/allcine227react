import * as React from 'react';
import Box from '@mui/material/Box';
import * as PropTypes from "prop-types";
import { red} from "@mui/material/colors";



function Item(props) {
    return null;
}

Item.propTypes = {
    elevation: PropTypes.number,
    props: PropTypes.node
};


export default function Home(props) {

    return (
        <Box
            sx={{
                width: '100%',
                '& > .MuiBox-root > .MuiBox-root': {
                    p: 1,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    bgcolor: red[100],
                },
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gap: 1,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `"header header header header"
        "main main main main"`,
                }}
            >
                <Box sx={{gridArea: 'header'}}>{props.top}</Box>
                <Box
                    sx={{

                        marginTop:7,
                        gridArea: 'main'

                    }}
                >
                    {props.left}
                </Box>

            </Box>
        </Box>
    );
}
