const Product = () => {
    return (
        <div>
            Here is a list of Our Products
        </div>
    )
};
export const getStaticProps = async ({ params }) => {
    const id = params.id;
    const myData = await Axios.get("");
    return {
        props: {
            aknData: myData.data,
        },
        revalidate: 3,
    };
};

export default Product;