import { Box, Center, Container, Link, VStack } from '@chakra-ui/layout'
import { Button, Input, Text } from '@chakra-ui/react'
import React, { FunctionComponent, useState } from 'react'
import { Site } from '../../types'

interface LoginProps {
  onLoggedIn: (site: Site) => void
}

const Login: FunctionComponent<LoginProps> = ({ onLoggedIn }: LoginProps) => {
  const [email, setEmail] = useState('')

  return (
    <Box>
      <Center height="100vh">
        <Container maxW={400} centerContent textAlign="center">
          <VStack spacing={6}>
            <Text fontSize="xl" fontWeight={600}>
              Log in
            </Text>
            <Text>
              This is a live demo on building a multi-tenant app using Next.js
              and Vercel
            </Text>

            <Input
              placeholder="sukh@blawg.cc"
              onChange={(evt) => {
                setEmail(evt.target.value)
              }}
            />
            <Button
              colorScheme="brand"
              onClick={() => {
                fetch(`/api/app`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    onLoggedIn(data.site)
                  })
              }}
            >
              Sign in →
            </Button>

            <Link href="https://saasbase.dev">Built by SaaSBase</Link>
          </VStack>
        </Container>
      </Center>
    </Box>
  )
}

export default Login
