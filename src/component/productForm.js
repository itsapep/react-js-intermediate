import DepsContext from '../context/depsContext';
import { useState } from "react";
import { ButtonForm } from "../shared/buttonForm";
import { InputForm } from "../shared/inputForm";

const ProductForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        id : '',
        productName : '',
    });
    const [error, setError] = useState(null);

    const handleOnInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setData ({
            ...data,
            [key]: value
        })
    }

    const handleSaveProduct = async (context) => {
        setIsLoading(true)
        setError(null)
        try {
            const result = await context.productService.addProduct({
                id: data.id,
                productName: data.productName
            });
            if (result) {
                console.log(result);
                alert(result);
            }
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            console.log('finally');
            setIsLoading(false);
            setData({
                id : '', 
                productName : ''
            });
        }
    }

    return (
        <div>
            <InputForm name='id' label='ID' value={data.id} handleOnInput={handleOnInput}/>
            <InputForm name="productName" label='Product Name' value={data.productName} handleOnInput={handleOnInput}/>
            <DepsContext.Consumer>
                {context => {
                    return (
                        <ButtonForm label='Save' isLoading={isLoading} handleSaveProduct={() => {handleSaveProduct(context)}}/>
                    )
                }}
            </DepsContext.Consumer>
            {error && <div>ooopz</div>}
        </div>
    )
}

export default ProductForm;