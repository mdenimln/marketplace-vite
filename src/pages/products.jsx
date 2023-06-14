import CartProducts from "../components/Fragments/CartProducts";


const ProductsPage = () => {
    return(
        <div className="flex justify-center py-5">
            <CartProducts>
                <CartProducts.Header />
                <CartProducts.Body />
                <CartProducts.Footer />
            </CartProducts>
        </div>
    )
}
export default ProductsPage;