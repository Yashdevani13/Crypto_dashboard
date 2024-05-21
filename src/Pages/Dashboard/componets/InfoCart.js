import { Card, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const InfoCart = ({ imgUrl,text, tagText , inverted }) => {
    return (
        <>
            <Card  p="6" bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat" bgColor={inverted ? "p.purple" : "white"} >
                <Tag 
                color={inverted ? "p.purple" : "white"} 
                bg={inverted ? "white" : "p.purple"} 
                borderRadius="full" w="18%" placeItems="center" >
                    {tagText}
                </Tag>
                <Text mt="4" fontWeight="medium" fontStyle="h5" color={inverted ? "white" : "black.80"}>
                    {text}
                </Text>
            </Card>
        </>
    )
}

export default InfoCart
