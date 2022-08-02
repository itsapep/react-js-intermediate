import LabelToggle from "../../component/LabelToggle";

const ProductCard = (props) => {
    const {product} = props
    return(
        <div>
            <p>
                <b>ID</b> {product.productId}
            </p>
            <p>
                <b>Name</b> <LabelToggle title={product.productName}/>
            </p>
        </div>
    )
}

export default ProductCard;