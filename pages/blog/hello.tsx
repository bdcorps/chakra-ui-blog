import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Layout from '../../components/Layout'
import { getMetaImage } from '../../utils'

interface HelloPostProps {}

const HelloPost: FunctionComponent<HelloPostProps> = ({ post }: any) => {
  const title: string = 'This is a post'
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

~~~js
console.log('It works!')
~~~
`

  return (
    <Layout>
      <Prose>
        <Link color="gray.500" fontSize="sm" href="/">
          ← Back
        </Link>
        <VStack spacing={2} align="flex-start">
          <Text color="gray.500" fontSize="sm">
            Thursday, June 23, 2022
          </Text>
          <Heading fontSize="3xl">{title}</Heading>
          <Text>{post?.description}</Text>
          <Text color="gray.500" fontSize="sm">
            By Adam Wathan
          </Text>
        </VStack>

        <Box>
          <Image
            src={getMetaImage(title)}
            alt="Blog header image"
            width={800}
            height={400}
          ></Image>
        </Box>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter language={match[1]}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </Prose>
    </Layout>
  )
}

export default HelloPost
