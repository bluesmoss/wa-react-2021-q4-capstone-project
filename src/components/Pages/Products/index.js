import React, {useContext} from "react";
import {productCategories} from '../../../mocks/en-us';
import { Sidebar, Wrapper, Checkbox, TextGradient, Paginator} from "../../../components/Common"
import { ProductList, ProductPreview } from "../../Products"
import { ProductsContext } from "../../../contexts/Products"

function Products(){

    const { filteredProducts, filterProducts, totalProducts} = useContext(ProductsContext)
    const { results: categories } = productCategories;
    const totalSearchedProducts = filteredProducts.length;
    
    return (
        <Wrapper flex justify="start">
            <Sidebar className="filters" >
                <Wrapper className="filters__header">
                    Filters
                </Wrapper>
                <Wrapper className="filters__section">
                    <span className="filters__title">Category</span>
                    {categories.map((category) => (
                        <Checkbox 
                            key={category.id}
                            name= {category.data.name}
                            id={category.id}
                            type={category.slugs}
                            onChange={(event)=> filterProducts(event)}
                        />
                    ))}                    
                </Wrapper>                     
            </Sidebar>
            <section className="results">
                <Wrapper padding="10px">
                    <TextGradient color={"PRIMARY"} fontSize="3em">Products</TextGradient>
                </Wrapper>
                <ProductList>
                    {filteredProducts.map((product, index) => (
                        <ProductPreview 
                            key={product.id}
                            data={product.data}
                        />                           
                    ))}                    
                </ProductList>
                <Paginator totalSearched={totalSearchedProducts} total={totalProducts}/>
            </section>
        </Wrapper>
    )
}
export { Products }