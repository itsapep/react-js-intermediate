import { Component } from "react";
import { ProductService } from "./productService";
import { ButtonForm } from "./shared/buttonForm";
import { InputForm } from "./shared/inputForm";

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: {
                id: '',
                productName: ''
            },
            error: null
        };
        this.productService = ProductService();
    }

    handleOnInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            data: {
                ...this.state.data,
                [key]: value
            }
        })
    }

    handleSaveProduct = async () => {
        this.setState({
            isLoading: true,
            error: null
        })
        try {
            const result = await this.productService.addProduct({
                id: this.state.data.id,
                productName: this.state.data.productName
            });
            if (result) {
                alert(result)
            }
            this.setState({
                isLoading: false,
                error: null,
                data: {id: '', productName: ''}
            })
        } catch (error) {
            this.setState({
                isLoading: false,
                error: error,
                data: {id: '', productName: ''}
            })
        }
    }

    render() {
        return(
            <div>
                <InputForm name='id' label='ID' value={this.state.data.id} handleOnInput={this.handleOnInput}/>
                <InputForm name="productName" label='Product Name' value={this.state.data.productName} handleOnInput={this.handleOnInput}/>
                <ButtonForm label='Save' isLoading={this.state.isLoading} handleSaveProduct={this.handleSaveProduct}/>
                {this.state.error && <div>ooopz</div>}
            </div>
        )
    }
}

export default ProductForm;