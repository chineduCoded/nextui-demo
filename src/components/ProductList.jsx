import React from 'react'
import { Grid, Card, Text, Row, Image, Button } from "@nextui-org/react"

const ProductList = ({ product: { image, name, price } }) => {
    return (
        <Grid xs={4}>
            <Card color='black' isHoverable>
                <Card.Body>
                    <Row justify='center' align='center'>
                        <Image objectFit='cover' src={image}></Image>
                    </Row>
                    <Row justify='center' align='center'>
                        <Text h4 size={20} css={{ m: 0 }}>
                            {name}
                        </Text>
                    </Row>
                    <Row justify='center' align='center'>
                        <Text h4 size={15} b css={{ m: 0 }}>
                            ${price}
                        </Text>
                    </Row>
                    <Row justify='center' align='center'>
                        <Button css={{ mt: 10, tt: "capitalize" }}>Add to Cart</Button>
                    </Row>
                </Card.Body>
            </Card>
        </Grid>
    )
}

export default ProductList