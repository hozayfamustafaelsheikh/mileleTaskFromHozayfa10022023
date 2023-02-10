import { Row, Col, Form } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import ModelsDataService from "../services/models.service";
import ColorsDataService from "../services/colors.service";
import { DataContext } from '../provider/contextProvider';

function SecondPage(props) {
  const [showSFX, setShowSFX] = useState(false);
  const [showVariant, setShowVariant] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [models, setModels] = useState([]);
  const [sfxes, setsfxes] = useState([]);
  const [variants, setVariants] = useState([]);
  const [colors, setColors] = useState([]);
  const {setModelId, setSfxId, setVariantId, setColorId} = useContext(DataContext);

  useEffect(() => {
    ModelsDataService.getAll()
      .then((response) => {
        setModels(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    ColorsDataService.getAll()
      .then((response) => {
        setColors(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const selectModel = (e) => {
    let selectedModelID = e.target.value;
    if (selectedModelID === "") {
      setShowSFX(false);
      setsfxes([]);
    }
    else {
      setShowSFX(true);
      let selectedmodel = models.filter(
        (model) => model.id === parseInt(selectedModelID)
      );
      setModelId(selectedmodel[0].id);
      setsfxes(selectedmodel[0].sfxes);
    }
  }

  const selectSfx = (e) => {
    let selectedsfxID = e.target.value;
    if (selectedsfxID === "") {
      setShowVariant(false);
      setVariants([]);
    }
    else {
      setShowVariant(true);
      let selectedsfx = sfxes.filter(
        (sfx) => sfx.id === parseInt(selectedsfxID)
      );
      setSfxId(selectedsfx[0].id);
      setVariants(selectedsfx[0].variants);
    }
  }

  const selectVariant = (e) => {
    let selectedVariantID = e.target.value;
    setVariantId(selectedVariantID);
    setShowColors(true);
  }

  const selectColor = (e) => {
    let selectedColorID = e.target.value;
    props.setShowTable(true);
    setColorId(selectedColorID);
  }

  return (
    <div className='pt-5'>
      <Row>
        <Col>
          <Form.Select onChange={(e) => selectModel(e)}>
            <option value="">Model</option>
            {
              models.length > 0 && (
                models.map(model => (
                  <option value={model.id} key={model.id}>{model.name}</option>
                ))
              )
            }
          </Form.Select>
        </Col>
        <Col>
          <Form.Select onChange={(e) => selectSfx(e)} disabled={!showSFX}>
            <option>SFX</option>
            {
              showSFX && (
                sfxes.length > 0 && (
                  sfxes.map(sfx => (
                    <option value={sfx.id} key={sfx.id} >{sfx.name}</option>
                  ))
                )
              )
            }
          </Form.Select>
        </Col>
        <Col>
          <Form.Select disabled={!showVariant} onChange={(e) => selectVariant(e)}>
            <option>Variant</option>
            {
              showVariant && (
                variants.length > 0 && (
                  variants.map(variant => (
                    <option value={variant.id} key={variant.id}>{variant.name}</option>
                  ))
                )
              )
            }
          </Form.Select>
        </Col>
        <Col>
          <Form.Select disabled={!showColors} onChange={(e) => selectColor(e)}>
            <option>Color</option>
            {
              showColors && (
                colors.length > 0 && (
                  colors.map(color => (
                    <option value={color.id} key={color.id}>{color.name}</option>
                  ))
                )
              )
            }
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
}

export default SecondPage;
