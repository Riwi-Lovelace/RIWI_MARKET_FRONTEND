import '../../custom/private/definedStyles.css'

import './modalInfoStructure.css'

export default function ModalAdminInfoComponent() {
    return (
      <div className="container">
      <div className="header">
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
        <h2 className="title">Seller</h2>
      </div>
      <div className="content">
        <p className="info">
          Name: <span className="info-value">Lucia Lopéz</span>
        </p>
        <p className="info">
          Email: <span className="info-value">Lucia0232@gmail.com</span>
        </p>
        <p className="info">
          Phone: <span className="info-value">311 4565</span>
        </p>
        <p className="info">
          Address: <span className="info-value">Colombia, Medellín</span>
        </p>
        <p className="info">
          Document: <span className="info-value">10402334</span>
        </p>
        <p className="info">
          Salary: <span className="info-value">1’000’000</span>
        </p>
      </div>
      <div className="button-container">
        <button className="edit-button">Edit</button>
      </div>
    </div>
    )
  }