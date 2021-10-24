import React from "react";
import {productCategories, products} from '../../../mocks/en-us';
import { Sidebar, Wrapper, Checkbox, TextGradient} from "../../../components/Common"
import { ProductList, ProductPreview } from "../../Products"

function Products(){
    const { results: categories } = productCategories;
    const { results: allProducts } = products;
    
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
                        />
                    ))}                    
                </Wrapper>                     
            </Sidebar>
            <section className="results">
                <Wrapper padding="10px">
                    <TextGradient color={"PRIMARY"} fontSize="3em">Products</TextGradient>
                </Wrapper>
                <ProductList>
                    {allProducts.map((product, index) => (
                        <ProductPreview 
                            key={product.id}
                            data={product.data}
                        />                           
                    ))}                    
                </ProductList>
            </section>
        </Wrapper>
    )
}
export { Products }