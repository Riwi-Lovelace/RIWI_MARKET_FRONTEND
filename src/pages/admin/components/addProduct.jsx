import { useEffect, useState } from "react";

function addProduct() {

  const [modalstate, setModal] = useState([]);

  useEffect(() => {
    
  })
  
  return (
    <div className="modelInformation">
      <div className="informationRequired">
        <span>Product title *</span>
        <input type="text" id="productTitle" name="productTitle" />
        <span>Description * </span>
        <input type="text" id="description" name="description" />
        <span>IVA *</span>
        <input type="number" id="iva" name="iva" />
        <span>Brand</span>
        <select name="brands">
          <option value="brand1">Brand 1</option>
        </select>

      </div>
      <div className="pictureProduct">

      </div>
    </div>

  )
}
export default addProduct;