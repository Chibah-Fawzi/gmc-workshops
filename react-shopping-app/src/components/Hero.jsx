import "../assets/styles/Hero.css"


export default function Hero({ setFilteredProducts }) {
    return (
        <section id="hero-container">
            <div id='text-hero'>
                <h1>Welcome to <span>Oued<i>kniss</i></span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam eius temporibus magni dolorum. Fuga, veritatis quos! Harum quasi voluptates quae, qui inventore ab quod sed ipsam, dolore asperiores voluptatem.</p>
                <button onClick={() => setFilteredProducts([])}>All products</button>
            </div>
            <img src="https://redux-shooping.netlify.app/static/media/manmodelimg.b3cc2f31.png" alt="A man watching you when you sleep" />

        </section>
    )
}
