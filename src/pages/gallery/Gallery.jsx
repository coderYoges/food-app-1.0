import React, {Fragment} from "react";
import Navbar from "../../components/navbar/Navbar";
import FooterCmpt from "../../components/footer/Footer";
import Content from "./Content";

const GalleryPage = ({...props}) => {
    return (
        <Fragment>
            <Navbar />
            <Content {...props}/>
            <FooterCmpt />
        </Fragment>
    )
}

export default GalleryPage;