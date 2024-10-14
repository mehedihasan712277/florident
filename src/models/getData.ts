import { ProductDataType } from "./type";

export const getAllProducts = async (): Promise<ProductDataType[]> => {
    const response = await fetch("https://florident-backend.vercel.app/products")
    const data = await response.json();
    return data;
}

export const getSingleProduct = async (id: string): Promise<ProductDataType> => {
    const response = await fetch(`https://florident-backend.vercel.app/product/${id}`)
    const data = await response.json();
    return data;
}