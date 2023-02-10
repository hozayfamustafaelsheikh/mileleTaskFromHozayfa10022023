import { Button, Table } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../provider/contextProvider';
import DatasDataService from "../services/datas.service";

function TablePage() {
  const { supplierId, wholeSellerId, steeringType, modelId, sfxId, variantId, colorId } = useContext(DataContext);
  const [gotData, setGotData] = useState([]);
  let year = (new Date().getFullYear().toString().substr(-2));
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const data = {
      supplierId,
      wholeSellerId,
      steeringType,
      modelId,
      sfxId,
      variantId,
      colorId
    }
    
    DatasDataService.getAll(data)
      .then((response) => {
        console.log(response.data);
        setGotData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [supplierId, wholeSellerId, steeringType, modelId, sfxId, variantId, colorId]);

  const handleDel = (idx) => {
    let cloneGotData = gotData.filter((item, index) => index != idx);
    setGotData(cloneGotData);
  };

  const handleAddRow = () => {
    var leng = gotData.length;
    const item = {
      id: leng + 1,
      Jan: "",
      Feb: "",
      Mar: "",
      Apr: "",
      May: "",
      Jun: "",
      Jul: "",
      Aug: "",
      Sep: "",
      Oct: "",
      Nov: "",
      Dec: "",
      newRecord: true,
      colorId: colorId,
      modelId: modelId,
      sfxId: sfxId,
      steeringType: steeringType,
      supplierId: supplierId,
      variantId: variantId,
      wholesellerId: wholeSellerId,
      year: year,
    };
    let cloneGotData = [...gotData];
    cloneGotData.push(item)
    setGotData(cloneGotData)
  };

  const handleItemChange = (e, idx) => {
    const { name, value } = e.target;
    let cloneGotData = [...gotData];
    cloneGotData[idx][name] = value;
    setGotData(cloneGotData)
  };

  const submitData = () => {
    console.log(gotData)
    for (let index = 0; index < gotData.length; index++) {
      const element = gotData[index];
      if (element.newRecord) {
        delete element.id;
        DatasDataService.create(element).then((response) => {
          if (response.data) {
            setSuccessMessage("Data saved successfully");
          }
        })
          .catch((e) => {
            console.log(e);
            setErrorMessage("Error: " + e);
          });
      }
      else {
        DatasDataService.update(element.id, element).then((response) => {
          if (response.data) {
            setSuccessMessage("Data saved successfully");
          }
        })
          .catch((e) => {
            console.log(e);
            setErrorMessage("Error: " + e);
          });
      }

    }
  }

  return (
    <div className='pt-5'>
      {
        successMessage && (
          <div className='alert alert-success my-2'>
            {successMessage}
          </div>
        )
      }
      {
        errorMessage && (
          <div className='alert alert-danger my-2'>
            {errorMessage}
          </div>
        )
      }
      <Button onClick={() => handleAddRow()}>Add New Row</Button>
      <Table striped bordered hover size="sm" className='mt-3'>
        <thead>
          <tr>
            <th>NO.</th>
            <th>Jan {year}</th>
            <th>Feb {year}</th>
            <th>Mar {year}</th>
            <th>Apr {year}</th>
            <th>May {year}</th>
            <th>Jun {year}</th>
            <th>Jul {year}</th>
            <th>Aug {year}</th>
            <th>Sep {year}</th>
            <th>Oct {year}</th>
            <th>Nov {year}</th>
            <th>Dec {year}</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            gotData.length > 0 && (
              gotData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><input type="number" name="Jan" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Jan} /></td>
                  <td><input type="number" name="Feb" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Feb} /></td>
                  <td><input type="number" name="Mar" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Mar} /></td>
                  <td><input type="number" name="Apr" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Apr} /></td>
                  <td><input type="number" name="May" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.May} /></td>
                  <td><input type="number" name="Jun" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Jun} /></td>
                  <td><input type="number" name="Jul" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Jul} /></td>
                  <td><input type="number" name="Aug" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Aug} /></td>
                  <td><input type="number" name="Sep" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Sep} /></td>
                  <td><input type="number" name="Oct" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Oct} /></td>
                  <td><input type="number" name="Nov" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Nov} /></td>
                  <td><input type="number" name="Dec" onChange={(e) => handleItemChange(e, index)} className='form-control w-80' defaultValue={item.Dec} /></td>
                  <td><Button variant='danger' onClick={() => handleDel(index)}>Delete</Button></td>
                </tr>
              ))
            )
          }
        </tbody>
      </Table>

      <Button variant='success' onClick={() => submitData()}>Save Data</Button>
    </div>
  );
}

export default TablePage;
