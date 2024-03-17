import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="w-[90%] mx-auto">
            <div className="hero min-h-[600px] rounded-xl bg-top" style={{ backgroundImage: `url(${bannerImg})` }}>

                <div className="hero-overlay bg-opacity-10 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-2xl md:text-5xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Unlock culinary mastery with our bespoke cooking class, designed exclusively for your unique tastes and preferences!</p>
                        <div className='flex flex-col lg:flex-row md:flex-row gap-5 justify-center'>
                            <button className="btn rounded-3xl text-xl bg-green-400 text-black ">Explore Now</button>
                            <button className="btn rounded-3xl text-xl bg-transparent text-white ">Our Feedback</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;