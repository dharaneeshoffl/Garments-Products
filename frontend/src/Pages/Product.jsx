import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breakcrum from '../Components/Breakcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/Relatedproducts/RelatedProduct';

export default function Product() {

  let { all_product } = useContext(ShopContext)
  let { productId } = useParams();
  let product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breakcrum product={product } />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct/>
    </div>
  )
}
