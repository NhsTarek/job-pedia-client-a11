

const Slide = ({image, text, }) => {
    return (
        <div className="hero min-h-screen bg-[#FFFFFF]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-[370px] md:max-w-2xl lg:max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{text}</h1>
                    <p className="py-6">Explore diverse job listings tailored to your preferences. Whether it's remote, part-time, or on-site, discover opportunities that match your skills and aspirations</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Slide;