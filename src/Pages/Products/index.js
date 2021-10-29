import React, {useEffect, useState} from "react";
import {productCategories} from '../../mocks/en-us';
import { Sidebar, Wrapper, Checkbox, TextGradient, Paginator, TextColored} from "../../components/Common"
import { ProductList, ProductPreview } from "../../components/Products"
import { useProductsContext } from "../../contexts/Products"
import { Fragment } from "react/cjs/react.production.min";
import { GENERAL, TEXT_COLOR_TYPES } from "../../utils/constants";

function Products(){

    const { filteredProducts, filterProducts, totalProducts, setFilteredProducts, setFilters, allProducts} = useProductsContext()
    const [loading, setLoading] = useState(true)
    const { results: categories } = productCategories;
    const totalSearchedProducts = filteredProducts.length;
    
    useEffect(()=>{
        setFilteredProducts(allProducts)
        setFilters(GENERAL.EMPTY_ARRAY)

        setTimeout(() => {
            setLoading(false)
        }, GENERAL.DELAY_DATA)

    }, [])
    
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
                            onChange={filterProducts}
                        />
                    ))}                    
                </Wrapper>                     
            </Sidebar>
            <section className="results">
                {loading && 
                    <Wrapper flex padding="100px">
                        <TextColored color={TEXT_COLOR_TYPES.SECONDARY}>Loading....</TextColored>
                    </Wrapper>
                }

                {!loading && 
                    <Fragment>
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
                    </Fragment>                
                
                }
     
            </section>
        </Wrapper>
    )
}
export { Products }