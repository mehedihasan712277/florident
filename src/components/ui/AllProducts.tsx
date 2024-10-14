import { getAllProducts } from "@/models/getData"
import ProductCard from "./ProductCard";
import Link from "next/link";


const AllProducts = async () => {
    const data = await getAllProducts();
    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 w-fit mx-auto gap-4 py-10">
                {
                    data.map(ele => {
                        return <div key={ele._id}>
                            <Link href={`/product/${ele._id}`}>
                                <ProductCard
                                    _id={ele._id}
                                    name={ele.name}
                                    description={ele.description}
                                    imgUrl={ele.imgUrl}
                                    regularPrice={ele.regularPrice}
                                    reducedPrice={ele.reducedPrice}
                                    inStock={ele.inStock}
                                    category={ele.category}
                                >
                                </ProductCard>
                            </Link>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default AllProducts