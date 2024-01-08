const Layout = ({
    children,
    products,
    analytics,
    payments,
}: {
    children: React.ReactNode;
    products: React.ReactNode;
    analytics: React.ReactNode;
    payments: React.ReactNode;
}) => {

    return (
        <div className="p-5">
            <h1 className="text-center text-xl font-bold mb-5">DASHBOARD</h1>
            <div>{children}</div>

            {/* Parallel Route : memungkinkan kita untuk melakukan kondisonal render terhadap 1 page atau lebih di dalam layout yang sama */}
            {/* {product} ini merupakan parallel route */}
            <div className="mt-5 flex justify-center items-center gap-5">
            {products}
            {analytics}
            </div>
            {payments}
        </div>
    );
};

export default Layout;
