import Cart from '../components/Cart';

function CartPage({ cart, setCart }) {
    return (
        <div>
            {/* Cart sidebar */}
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
}

export default CartPage;