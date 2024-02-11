import { Box, Heading , Text} from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ErrorMessagePage = () => {
    const error = useRouteError()
    return(
        <>
            <NavBar />
            <Box paddingLeft={5}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error) ? "This page does not exist." : "Unexpected Error"}</Text>
            </Box>
        </>
    )
}

export default ErrorMessagePage