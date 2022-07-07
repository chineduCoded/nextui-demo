import React from 'react'
import { Grid, Container, Pagination } from "@nextui-org/react"
import { products } from "../data"
import ProductList from "./ProductList"

const Product = () => {
    return (
        <div className='Product'>
            <Container>
                <Grid.Container gap={2} justify="center">
                    {products.map((product) => (
                        <ProductList key={product.id} product={product} />
                    ))}
                </Grid.Container>
                <Pagination total={10} initialPage={1} />
            </Container>
        </div>
    )
}

export default Product