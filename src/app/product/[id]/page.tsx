import { getSingleProduct } from "@/models/getData"

interface ProductDetailsPageProps {
    params: {
        id: string;
    };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
    const data = await getSingleProduct(params.id);
    console.log(data);

    return (
        <div>ProductDetailsPage</div>
    );
};

export default ProductDetailsPage;
