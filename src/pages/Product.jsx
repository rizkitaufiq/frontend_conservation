import NavbarSubmenu from "../components/NavbarSubmenu";
const Product = () => {
    return (
        <>
            <div>
                <NavbarSubmenu />
                <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
                    <h1 className="text-center md:text-5xl text-3xl font-bold text-secondary leading-normal">Product</h1>
                    <div className="container px-5 mt-10 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">The 400 Blows</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">Shooting Stars</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">Neptune</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href="" className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-secondary tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-primary title-font text-lg font-medium">The 400 Blows</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;