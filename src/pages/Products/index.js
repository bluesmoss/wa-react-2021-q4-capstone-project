import React, {useEffect, useState} from "react";
import { Sidebar, Wrapper, Checkbox, TextGradient, Paginator, TextColored} from "../../components/Common"
import { ProductList, ProductPreview } from "../../components/Products"
import { useProductsContext } from "../../providers/Products"
import { Fragment } from "react/cjs/react.production.min";
import { GENERAL, QUERY, TEXT_COLOR_TYPES } from "../../utils/constants";
import { useGetDataAPI } from "../../utils/hooks/useGetDataAPI";

function Products(){

    const { filteredProducts, handleFilterProducts, totalProducts, setFilteredProducts, setFilters, allProducts} = useProductsContext()
    const [loading, setLoading] = useState(true)
    const { data : { results : categoriesData} } = useGetDataAPI(QUERY.CATEGORY_PREDICATE, QUERY.CATEGORY_SIZE);
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
                    {categoriesData && categoriesData.map((category) => (
                        <Checkbox 
                            key={category.id}
                            name= {category.data.name}
                            id={category.id}
                            type={category.slugs}
                            onChange={handleFilterProducts}
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