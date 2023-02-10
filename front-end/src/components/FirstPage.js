import { Row, Col, Form, Button } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import SuppliersDataService from "../services/suppliers.service";
import { DataContext } from '../provider/contextProvider';

function FirstPage(props) {
  const [showWholeSeller, setShowWholeSeller] = useState(false);
  const [showSteeringType, setShowSteeringType] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [wholeSellers, setWholeSellers] = useState([]);
  const { supplierId, wholeSellerId, steeringType, setSupplierId, setWholeSellerId, setSteeringType} = useContext(DataContext);

  useEffect(() => {
    SuppliersDataService.getAll()
      .then((response) => {
        setSuppliers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const checkAllFieldsSelectedThenOpenSecondPage = () => {
    if (supplierId != 0 && wholeSellerId != 0 && steeringType != 0) {
      props.setShowSecondPage(true)
    }
  }

  const selectSupplier = (e) => {
    let selectedSupplierID = e.target.value;
    if (selectedSupplierID === "") {
      setShowWholeSeller(false);
      setWholeSellers([]);
    }
    else {
      setShowWholeSeller(true);
      let selectedSupplier = suppliers.filter(
        (supplier) => supplier.id === parseInt(selectedSupplierID)
      );
      setSupplierId(selectedSupplier[0].id);
      setWholeSellers(selectedSupplier[0].wholesellers);
    }
  }

  const selectWholeSeller = (e) => {
    let selectedWholeSellerID = e.target.value;
    setWholeSellerId(selectedWholeSellerID);
    setShowSteeringType(true);
  }

  const selectSteeringType = (e) => {
    let selectedSteeringTypeID = e.target.value;
    setSteeringType(selectedSteeringTypeID);
  }

  return (
    <div className='pt-5'>
      <Row>
        <Col>
          <Form.Select onChange={(e) => selectSupplier(e)}>
            <option value="">Supplier</option>
            {
              suppliers.length > 0 && (
                suppliers.map(supplier => (
                  <option value={supplier.id} key={supplier.id}>{supplier.name}</option>
                ))
              )
            }
          </Form.Select>
        </Col>
        <Col>
          <Form.Select onChange={(e) => selectWholeSeller(e)} disabled={!showWholeSeller}>
            <option>Whole Seller</option>
            {
              showWholeSeller && (
                wholeSellers.length > 0 && (
                  wholeSellers.map(wholeSeller => (
                    <option value={wholeSeller.id} key={wholeSeller.id} >{wholeSeller.name}</option>
                  ))
                )
              )
            }
          </Form.Select>
        </Col>
        <Col>
          <Form.Select disabled={!showSteeringType} onChange={(e) => selectSteeringType(e)} >
            <option>Steering Type</option>
            {
              showSteeringType && (
                <>
                  <option value="LHD">Left Hand Driven (LHD)</option>
                  <option value="RHD">Right Hand Driven (RHD)</option>
                </>
              )
            }
          </Form.Select>
        </Col>
        <Col>
          <Button onClick={() => checkAllFieldsSelectedThenOpenSecondPage(true)} variant="success">Submit</Button>
        </Col>
      </Row>
    </div>
  );
}

export default FirstPage;
