export default interface ProductData {
    name: string;
    price: number;
    priceWithDiscount: number;
    smallDescription: string;
    description: string;
    subtitle: string;
    sku: string;
    discount: number;
    isNew: boolean;
    images: string[];
    reviews: number[];  
    size: string[];
    colors: string[];
    tags: string[];
    shareLink: string[];  
    isDisabled: boolean;
    categoryId: number;
}
