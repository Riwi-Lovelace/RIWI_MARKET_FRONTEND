import {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function addProduct(){
    const [modalState, setModal] = useState(false);

    function openModal(){
      setModal(true);
    }

    function closeModal(){
      setModal(false);
    }

      return( 
        // <Modal isOpen = {modalState} onRequestModal = {closeModal}>
          <div className="modelInformation">
        <div className="informationRequired">
            <span>Product title *</span>
            <input type="text" id="productTitle" name="productTitle"/>
            <span>Description * </span>
            <input type="text" id="description" name="description"/>
            <span>IVA *</span>
            <input type="number" id="iva" name="iva"/>
            <span>Brand</span>
            <select name="brands">
                <option value="brand1">Brand 1</option>
            </select>

        </div>
        <div className="pictureProduct">

        </div>
      </div>
    // </Modal>  
    )
  }
export default addProduct;