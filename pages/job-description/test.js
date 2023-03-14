import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Container,
  Icon,
} from "@chakra-ui/react"


import Head from "next/head"

const JDTest = () => {

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png"/>
      </Head> 
      
      <NextSeo
            title="Job Description Template"
            description="Job Description TemplateJob Description TemplateJob Description TemplateJob Description Template."
      />

      
        <Container maxW="6xl" p="6" mt={10} mb={10}>
        <Box>
          <Box as="header" textAlign="center">
            
            {/* Here goes the JD title */}
            <Heading as="h1" py="4" size="2xl" >
                Job Description Template Title
            </Heading>
            {/* Here goes the JD title */}

            
            {/* Here is the reading time and date*/}
            <Flex direction="column">
              <Text fontSize="16px" color="gray.600" py="1">
                Nexus /{" "}
                2023-02-15 /{" "}
                2 mins read
              </Text>
       
            </Flex>
            {/* Here is the reading time and date*/}

          </Box>

          <Flex mt={10}>
            <Box as="article">
              <Box fontSize={20}>
                Job template first paragraph. Job template first paragraph. Job template first paragraph. Job template first paragraph.


                   <Text fontWeight='bold' mt={10} mb={2}> Job template 1st title </Text>
                    
                   The job title and summary should be clear and concise, providing a quick overview of the role and key responsibilities. Use language that is easy to understand, avoiding industry jargon that may confuse or alienate potential candidates. Be sure to include the level of experience required, the type of employment, and any special requirements.



                    <Text fontWeight='bold' mt={10}  mb={2}> Job template 2nd title </Text>
                    Use bullet points to break down the core responsibilities of the role in a clear and detailed manner. This can also help to ensure that everyone involved in the hiring process has a clear understanding of what the role entails.


                    <Text fontWeight='bold' mt={10}  mb={2}> Job template 3rd title </Text>
                    List the necessary skills and qualifications required for the candidate to perform the job successfully. Be specific and honest about the level of expertise required for each skill, as well as the level of experience necessary to excel in the role.


                    <Text fontWeight='bold' mt={10}  mb={2}> Job template 4th title </Text>
                    Include information about the company&apos;s mission, vision, and core values to showcase your company&apos;s culture and attract candidates who share your values.

                    <Text fontWeight='bold' mt={10}  mb={2}> Job template 5th title </Text>
                    
                    Inclusive language is essential to attracting a diverse pool of candidates. Avoid gendered language and use neutral terms whenever possible. Be mindful of any implicit biases in your language that may discourage certain groups from applying for the role.

                    <Text fontWeight='bold' mt={10}  mb={2}> Job template 6th title </Text>

                    Keep your job description concise and to the point, using clear and simple language that is easy to read. Avoid unnecessary details or long-winded explanations.

                    <br /> 
                    <br />

                    {/* Ending statement */}

                    By following these tips and best practices, you can create job descriptions that attract the right candidates, define the role and responsibilities clearly, and showcase your company&apos;s culture and values. Remember to keep your job descriptions concise and inclusive, and use clear language that is easy to understand. With these strategies, you can set your company up for success in finding the best candidates for the job.

                    {/* Ending statement */}

              </Box>
            </Box>
          </Flex>
        </Box>
       </Container> 
      
    </>
  )
}

export default JDTest;