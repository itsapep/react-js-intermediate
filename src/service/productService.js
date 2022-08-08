export const ProductService = () => {
    const addProduct = (newProduct) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (newProduct.id !== '') {
                    resolve('add product success')
                } else {
                    reject(new Error('ooopz...'))
                }
            }, 1500)
        })
    }
    return {
        addProduct
    }
}