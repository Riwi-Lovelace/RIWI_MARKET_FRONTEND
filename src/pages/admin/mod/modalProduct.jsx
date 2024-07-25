import React, { useState, useRef, useEffect } from "react";

//Importación de los estilos
import '../css/addProduct.css'

import { previewImage } from "../../../utils/enum/imagePreview";

export const ProductModalParam = ({ active }) => {

    const [activeModal, SetactiveModal] = useState(false);

    useEffect(() => {
        SetactiveModal(active == true)
    }, [activeModal, active]);

    const imageRef = useRef(null);

    if (activeModal) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className="modelInformation">
                <div className="title">
                    <h2>Add New Product</h2>
                    <img src='src\assets\products\ShoppingBag.png' alt="Icon" />
                </div>
                <div className="informationModal">
                    <div className="informationRequired">
                        <span>Product title *</span>
                        <input type="text" id="productTitle" name="productTitle" />
                        <span>Description * </span>
                        <input type="text" id="description" name="description" maxLength={500} />
                        <span>IVA *</span>
                        <input type="number" id="iva" name="iva" />
                        <span>Brand</span>
                        <select name="brands">
                            <option value="brand1">Brand 1</option>
                        </select>
                        <span className="newBrand">Can't find the brand? <a href="#">Add a new</a></span>
                    </div>
                    <div className="pictureProduct">

                    
                        <div className="image" ref={imageRef}>
                            <img src="src\assets\products\ImageDefault.png" alt="Img default" />
                        </div>
                        <input type="file" accept="image/*" id="uploadPicture" onChange={(e) => previewImage(e.target, imageRef.current)}/>

                        <label htmlFor="uploadPicture" className="upload"> Upload picture</label>
                        <select name="category" id="categories">
                            <option value="dairy">Dairy</option>
                            <option value="vegetables">Vegetables</option>
                        </select>
                            <select name="subCategory" id="subCategories">
                                <option value="Yogurt">Yogurt</option>
                            <option value="Yogurt">Yogurt</option>
                            <option value="Yogurt">Yogurt</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }

}