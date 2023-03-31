import "../assets/styles/Products.css"

export default function Products({ darkmode, products, filteredProducts }) {

    let darkStyle = {
        backgroundColor: '#404040',
        color: 'white',
    }

    return (
        <div style={darkmode ? darkStyle : {}} className="wrapper">
            <h2>Our products</h2>
            <div className="products-container">
                {filteredProducts.length == 0 ?
                    products.map((produit, index) => {
                        return (
                            <div className="product-card" key={index}>
                                <img src={produit.image} alt={produit.title} width='150px' />
                                <h3>{produit.title}</h3>
                                <p>Price : {produit.price}$</p>
                                <div>
                                    <button id="details">Product details</button>
                                    <button id="add_to_cart">Ajouter au panier</button>
                                </div>
                            </div>
                        )
                    }) : filteredProducts.map((produit, index) => {
                        return (
                            <div className="product-card" key={index}>
                                <img src={produit.image} alt={produit.title} width='150px' />
                                <h3>{produit.title}</h3>
                                <p>Price : {produit.price}$</p>
                                <div>
                                    <button id="details">Product details</button>
                                    <button id="add_to_cart">Ajouter au panier</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
