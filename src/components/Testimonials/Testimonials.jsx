

const Testimonials = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="md:w-2/4 relative">
                        <div data-aos="fade-right"
                            data-aos-duration="3000">
                            <img src="https://i.ibb.co/ZhSrg8j/chef-presenting-something-white-background-removebg-preview.png" className="max-w-sm md:max-w-2xl " />
                        </div>
                        <div className="stats shadow">

                            <div className="stat md:absolute md:left-80  md:top-1/3" >
                                <div className="stat-title">Total Website Views</div>
                                <div className="stat-value">79,800</div>
                                <div className="stat-desc">41% more than last month</div>
                            </div>

                        </div>

                    </div>
                    <div className="md:w-2/4 space-y-5">
                        <p className="text-green-400 font-semibold">Testimonials</p>
                        <h1 className="text-5xl font-bold">What Our Customers <br /> Say About Us</h1>
                        <p className="py-6">“I had the pleasure of dining at Hungry Ducks last night, and <br /> I'm still raving about the experience! The attention to  detail in presentation and service was impeccable”</p>
                        <div className="flex items-center">
                            <div className="avatar-group -space-x-6">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://i.ibb.co/Z1ByrYZ/337128596-934467024366365-8874635171407067304-n.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://i.ibb.co/xzB8QtZ/273704806-160860436277976-5045684836548730284-n.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://i.ibb.co/8KjnV2N/357731514-686194200010496-4549502443640449318-n.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral-focus text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <h3 className="text-xl font-semibold">Customer Feedback</h3>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" /><span className="font-semibold">8.9</span>  (20.6k Reviews)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;