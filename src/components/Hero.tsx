
export default function Hero() {
    return (
        <div id='hero' data-aos="fade-in" data-aos-delay="50" data-aos-duration="1000" className="hero min-h-screen" style={{ backgroundImage: 'url(https://extramile.thehartford.com/wp-content/uploads/2020/01/antique-furniture-restoration-1.jpg-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Antiques, New</h1>
                    <p className="mb-5">Antique-styled furniture, to turn your home into a classic place.</p>
                    <a href='#items' className="btn btn-primary">See Our Furniture</a>
                </div>
            </div>
        </div>
    )
}
