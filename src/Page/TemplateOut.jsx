import * as React from 'react';
import {Outlet} from "react-router-dom";
import HeaderPhone from "../components/header/App";
import Home from "../components/Home";

export default function TemplateOut() {
    return (
        <Home
        top={<HeaderPhone/>}
        left={

            <Outlet/>
        }
        />
    );
}
