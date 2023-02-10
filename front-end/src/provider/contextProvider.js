import { createContext, useState } from "react";

const DataContext = createContext();

const ContextProvider = ({ children }) => {

    const [supplierId, setSupplierId] = useState(0);
    const [wholeSellerId, setWholeSellerId] = useState(0);
    const [steeringType, setSteeringType] = useState("");
    const [modelId, setModelId] = useState(0);
    const [sfxId, setSfxId] = useState(0);
    const [variantId, setVariantId] = useState(0);
    const [colorId, setColorId] = useState(0);

    return (
        <DataContext.Provider value={{ supplierId, setSupplierId, wholeSellerId, setWholeSellerId, steeringType, setSteeringType, modelId, setModelId, sfxId, setSfxId, variantId, setVariantId, colorId, setColorId }}>
            {children}
        </DataContext.Provider>
    );
}

export { ContextProvider, DataContext };