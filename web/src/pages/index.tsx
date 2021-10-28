import {
  Badge,
  Box,
  Container,
  Flex,
  GridItem,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/layout';
import Head from 'next/head';
import { Button, Grid, Image, Link } from '@chakra-ui/react';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import React from 'react';

export default function Home() {
  return (
    <Box overflow='hidden'>
      <Head>
        <title>Welcome to My Portfolio and Blog Site</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container maxW='container.xl'>
        <main>
          <Box
            mt='5'
            pl='28'
            rounded='lg'
            position='relative'
            height='90vh'
            background='gray.300'
          >
            <HStack
              textColor='gray.600'
              spacing={{ base: '2', sm: '5' }}
              pr='4'
              pt='2'
              justifyContent='end'
            >
              <Link href='#'>
                <Text>about</Text>
              </Link>
              <Link href='mailto:neupanebishal07@gmail.com'>
                <Text>contact</Text>
              </Link>

              <Link href='#'>
                <Text>blog</Text>
              </Link>

              <Link href='#'>
                <Text>work</Text>
              </Link>
            </HStack>

            <Box
              mt={{ base: '10', md: '48', lg: '28', xl: '20' }}
              ml={{ base: '-20', md: '0.5' }}
            >
              <Text
                as='h1'
                fontSize={{
                  base: '2xl',
                  sm: '3xl',
                  md: '4xl',
                  lg: '5xl',
                  xl: '6xl',
                }}
                lineHeight='shorter'
                w={{ base: 'auto', sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}
              >
                I am full stack web developer building web and mobile app for
                businesses
              </Text>
            </Box>
            <Image
              alt='bishal'
              src='/bg.png'
              position='absolute'
              bottom='0'
              borderBottomRightRadius='2xl'
              right='0'
              boxSize={{ base: '400', md: '400', lg: '500', xl: '500' }}
              mt='16'
              objectFit='cover'
              alignSelf='flex-end'
              justifySelf='self-end'
            />
          </Box>
        </main>

        {/* About section */}
        <section>
          <Box
            mt='5'
            pl={{ base: '4', md: '28' }}
            rounded='lg'
            position='relative'
            // height='60vh'
            background='blue.300'
          >
            <Grid
              templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
              templateRows={{ base: 'repeat(4,1fr)', md: 'repeat(2,1fr)' }}
              gap='7'
            >
              <SpecialGridItem
                title='Work.'
                description='As a full stack designer I help early stage startups with everything from branding, product design, video and investor decks. I’ve had the pleasure to collaborate with top teams working across a variety of B2C & B2B industries in Israel and across the globe.'
              />
              <SpecialGridItem
                title='Blogs.'
                description='No Code Conf, SF. November 2019
                OFFF Festival, Tel-Aviv. September, 2019
                Elements Talks, Warsaw. June 2019
                Product Camp, Gdynia. June 2019
                Epicurrence, Yosemite. March 2018'
              />

              <Box p='3' mt={{ base: '0', md: '14' }}>
                <Link
                  href='mailto:neupanebishal07@gmail.com'
                  display='inline'
                  color='green.800'
                  textDecoration='underline'
                  mr='2'
                >
                  Email me
                </Link>
                <Text color='gray.700' display='inline'>
                  if you think we should be working together on interesting
                  projects.
                </Text>
              </Box>

              <SpecialGridItem
                title='Watch.'
                description='I host a daily YouTube show (+130k Subscribers), covering how I work and think as a designer & entrepreneur.'
              >
                <Link display='inline' ml='2'>
                  Watch on youtube.
                </Link>
              </SpecialGridItem>
            </Grid>
          </Box>
        </section>
      </Container>

      {/* work section */}
      <section>
        <Box backgroundImage='/pattern.jpg' mt='10'>
          <Box
            maxW='xl'
            px={{ base: '10', md: '32' }}
            pt={{ base: '10', md: '32' }}
            color='whiteAlpha.800'
          >
            <Text as='h3' fontSize='4xl'>
              TimeXoneSyncer
            </Text>
            <Text>
              Lets you sync your time with anyone’s time in the world with a
              click of a button.
              <Link
                ml='4'
                color='blue.400'
                href='https://timexonesyncer.tech/'
                target='_blank'
              >
                https://timexonesyncer.tech/
              </Link>
            </Text>
            <Stack direction='row' mt='3'>
              <Badge>UI/UX</Badge>
              <Badge colorScheme='green'>Frontend</Badge>
              <Badge colorScheme='red'>Backend</Badge>
              <Badge colorScheme='purple'>DevOps</Badge>
              <Badge colorScheme='purple'>
                <Link href='https://timexonesyncer.tech' target='_blank'>
                  Visit Website
                </Link>
              </Badge>
            </Stack>
          </Box>

          <Box display='flex' justifyContent='end' p='4'>
            <Image
              src='/timexonesyncer.gif'
              alt='timexonesyncer gif'
              rounded='xl'
            />
          </Box>
        </Box>

        <Box backgroundImage='/mp1.jpg' mt='-10'>
          <Box
            maxW='2xl'
            px={{ base: '10', md: '32' }}
            pt={{ base: '10', md: '32' }}
            pb='10'
            color='whiteAlpha.800'
          >
            <Text as='h3' fontSize='4xl'>
              SingAndShare
            </Text>
            <Text>
              Record and Share your awesome voice on the fly with your friends
              and rest of the world. SingAndShare makes it easy to record an
              audio file or choose already recorded file to upload it to our
              server and allow users to share them to social media like
              facebook,twitter etc.
              <Link
                ml='4'
                color='blue.400'
                href='https://sing-share.vercel.app/'
                target='_blank'
              >
                https://sing-share.vercel.app/
              </Link>
            </Text>
            <Stack direction='row' mt='3'>
              <Badge>UI/UX</Badge>
              <Badge colorScheme='green'>Frontend</Badge>
              <Badge colorScheme='red'>Backend</Badge>
              <Badge colorScheme='purple'>DevOps</Badge>
              <Badge colorScheme='purple'>
                <Link href='https://sing-share.vercel.app/' target='_blank'>
                  Visit Website
                </Link>
              </Badge>
            </Stack>
          </Box>

          <Box display='flex' justifyContent='end' p='4'>
            <Image src='/sing.gif' alt='singshare gif' rounded='xl' />
          </Box>
        </Box>
      </section>

      {/* blog section */}

      <section>
        <Box>
          <Box backgroundColor='pink.300' px='5' pb='4'>
            <Flex flexWrap='wrap'>
              <BlogCard
                title='Creating a CRUD Rest API using Nestjs'
                categories={['javascript', 'node', 'nestjs', 'rest']}
                description='Nestjs is a nodejs framework that comes with lots of features out of the box unlike others such as expressjs, fastify which are minimal. Nestjs makes use of typescript by default which gives type safety to the project. Thus, keeping it safe from type errors which are quite common with javascript.'
              />
              <BlogCard
                title='Creating a CRUD Rest API using Nestjs'
                categories={['javascript', 'node', 'nestjs', 'rest']}
                description='Nestjs is a nodejs framework that comes with lots of features out of the box unlike others such as expressjs, fastify which are minimal. Nestjs makes use of typescript by default which gives type safety to the project. Thus, keeping it safe from type errors which are quite common with javascript.'
              />

              <BlogCard
                title='Creating a CRUD Rest API using Nestjs'
                categories={['javascript', 'node', 'nestjs', 'rest']}
                description='Nestjs is a nodejs framework that comes with lots of features out of the box unlike others such as expressjs, fastify which are minimal. Nestjs makes use of typescript by default which gives type safety to the project. Thus, keeping it safe from type errors which are quite common with javascript.'
              />
            </Flex>

            <Box display='flex' justifyContent='end' my='4'>
              <Button>More posts</Button>
            </Box>
          </Box>
        </Box>
      </section>

      {/* social media section */}
      <section>
        <Box display='flex' flexDirection='column' alignItems='center' my='20'>
          <Text fontSize='6xl'>Stay In Touch</Text>
          <HStack spacing='10'>
            <Link href='#' target='_blank'>
              <GrMail size={30} />
            </Link>

            <Link href='#' target='_blank'>
              <AiFillInstagram size={30} />
            </Link>

            <Link href='#' target='_blank'>
              <AiFillYoutube size={30} />
            </Link>

            <Link href='#' target='_blank'>
              <AiOutlineTwitter size={30} />
            </Link>
          </HStack>
        </Box>
      </section>

      <section>
        <Box mx={5} display='flex' justifyContent='center' my='10'>
          <Text>
            Images by
            <Link
              href='https://unsplash.com/@marekpiwnicki'
              target='_blank'
              mx='2'
            >
              Marek Piwnicki &
            </Link>
            <Link href='https://www.pexels.com/@pixabay' target='_blank'>
              Pixabay
            </Link>
          </Text>
        </Box>
      </section>
    </Box>
  );
}

type BlogCardItemProps = {
  title: string;
  categories?: string[];
  description: string;
};

export const BlogCard: React.FC<BlogCardItemProps> = ({
  title,
  children,
  categories,
  description,
}) => {
  return (
    <Box
      mx={{ base: '1', md: '4' }}
      mt='4'
      w={{ base: '100%', md: 'sm' }}
      rounded='sm'
      p='3'
      bg='gray.300'
    >
      <Text fontSize='xl' isTruncated color='green.500'>
        <Link href='#' target='_blank'>
          {title}
        </Link>
      </Text>

      <Stack direction='row' my='2'>
        {categories.map((category) => (
          <Badge key={category}>{category}</Badge>
        ))}
        <Badge colorScheme='green'>20th dec,2020</Badge>
      </Stack>

      <Text noOfLines={10}>{description}</Text>

      <Box display='flex' justifyContent='end'>
        <Button>Read Blog</Button>
      </Box>
    </Box>
  );
};

type SpecialGridItemProps = {
  title?: string;
  description: string;
};

export const SpecialGridItem: React.FC<SpecialGridItemProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <GridItem p='3'>
      <Text fontSize='4xl'>{title}</Text>
      <Text color='gray.700' display='inline'>
        {description}
      </Text>
      {children}
    </GridItem>
  );
};

// import {
//   Badge,
//   Box,
//   Container,
//   Flex,
//   GridItem,
//   HStack,
//   Stack,
//   Text,
// } from '@chakra-ui/layout';
// import Head from 'next/head';
// import { Button, Grid, Link } from '@chakra-ui/react';
// import {
//   AiFillInstagram,
//   AiFillYoutube,
//   AiOutlineTwitter,
// } from 'react-icons/ai';
// import { GrMail } from 'react-icons/gr';
// import React from 'react';
// import { GetStaticProps, InferGetStaticPropsType } from 'next';
// import { request, gql } from 'graphql-request';
// import { landingPageQuery } from '../graphql/queries/Landing';
// import { LandingPageQuery } from '../generated';
// import Image from 'next/image';
// import { baseUrl } from '../utils/baseUrl';

// export const getStaticProps: GetStaticProps = async (context) => {
//   const landingPageData: LandingPageQuery = await request(
//     'http://localhost:1337/graphql',
//     landingPageQuery
//   );
//   return {
//     props: landingPageData,
//   };
// };

// export default function Home(props: LandingPageQuery) {
//   console.log(props);
//   return (
//     <Box overflow='hidden'>
//       <Head>
//         <title>{props.homepage.hero.title}</title>
//         <meta name='description' content='Generated by create next app' />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>

//       <Container maxW='container.xl'>
//         <main>
//           <Box
//             mt='5'
//             pl='28'
//             rounded='lg'
//             position='relative'
//             height='90vh'
//             background='gray.300'
//           >
//             <HStack
//               textColor='gray.600'
//               spacing={{ base: '2', sm: '5' }}
//               pr='4'
//               pt='2'
//               justifyContent='end'
//             >
//               {props.homepage.hero?.navlinks.split(',').map((nav) => {
//                 return (
//                   <Link
//                     key={nav}
//                     href={
//                       nav === 'contact'
//                         ? `mailto:${props.homepage.Contacts?.email}`
//                         : '#'
//                     }
//                   >
//                     <Text>{nav}</Text>
//                   </Link>
//                 );
//               })}
//             </HStack>

//             <Box
//               mt={{ base: '10', md: '48', lg: '28', xl: '20' }}
//               ml={{ base: '-20', md: '0.5' }}
//             >
//               <Text
//                 as='h1'
//                 fontSize={{
//                   base: '2xl',
//                   sm: '3xl',
//                   md: '4xl',
//                   lg: '5xl',
//                   xl: '6xl',
//                 }}
//                 lineHeight='shorter'
//                 w={{ base: 'auto', sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}
//               >
//                 {props.homepage.hero.title}
//               </Text>
//             </Box>
//             <Image
//               alt={props.homepage.hero.profile.alternativeText}
//               height={props.homepage.hero.profile.height}
//               width={props.homepage.hero.profile.width}
//               src={`${baseUrl}${props.homepage.hero.profile.url}`}
//             />
//           </Box>
//         </main>

//         {/* About section */}
//         <section>
//           <Box
//             mt='5'
//             pl={{ base: '4', md: '28' }}
//             rounded='lg'
//             position='relative'
//             // height='60vh'
//             background='blue.300'
//           >
//             <Grid
//               templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
//               templateRows={{ base: 'repeat(4,1fr)', md: 'repeat(2,1fr)' }}
//               gap='7'
//             >
//               <SpecialGridItem
//                 title='Work.'
//                 description='As a full stack designer I help early stage startups with everything from branding, product design, video and investor decks. I’ve had the pleasure to collaborate with top teams working across a variety of B2C & B2B industries in Israel and across the globe.'
//               />
//               <SpecialGridItem
//                 title='Blogs.'
//                 description='No Code Conf, SF. November 2019
//                 OFFF Festival, Tel-Aviv. September, 2019
//                 Elements Talks, Warsaw. June 2019
//                 Product Camp, Gdynia. June 2019
//                 Epicurrence, Yosemite. March 2018'
//               />

//               <Box p='3' mt={{ base: '0', md: '14' }}>
//                 <Link
//                   href='mailto:neupanebishal07@gmail.com'
//                   display='inline'
//                   color='green.800'
//                   textDecoration='underline'
//                   mr='2'
//                 >
//                   Email me
//                 </Link>
//                 <Text color='gray.700' display='inline'>
//                   if you think we should be working together on interesting
//                   projects.
//                 </Text>
//               </Box>

//               <SpecialGridItem
//                 title='Watch.'
//                 description='I host a daily YouTube show (+130k Subscribers), covering how I work and think as a designer & entrepreneur.'
//               >
//                 <Link display='inline' ml='2'>
//                   Watch on youtube.
//                 </Link>
//               </SpecialGridItem>
//             </Grid>
//           </Box>
//         </section>
//       </Container>

//       {/* work section */}
//       <section>
//         <Box backgroundImage='/pattern.jpg' mt='10'>
//           <Box
//             maxW='xl'
//             px={{ base: '10', md: '32' }}
//             pt={{ base: '10', md: '32' }}
//             color='whiteAlpha.800'
//           >
//             <Text as='h3' fontSize='4xl'>
//               TimeXoneSyncer
//             </Text>
//             <Text>
//               Lets you sync your time with anyone’s time in the world with a
//               click of a button.
//               <Link
//                 ml='4'
//                 color='blue.400'
//                 href='https://timexonesyncer.tech/'
//                 target='_blank'
//               >
//                 https://timexonesyncer.tech/
//               </Link>
//             </Text>
//             <Stack direction='row' mt='3'>
//               <Badge>UI/UX</Badge>
//               <Badge colorScheme='green'>Frontend</Badge>
//               <Badge colorScheme='red'>Backend</Badge>
//               <Badge colorScheme='purple'>DevOps</Badge>
//               <Badge colorScheme='purple'>
//                 <Link href='https://timexonesyncer.tech' target='_blank'>
//                   Visit Website
//                 </Link>
//               </Badge>
//             </Stack>
//           </Box>

//           <Box display='flex' justifyContent='end' p='4'>
//             <Image
//               src='/timexonesyncer.gif'
//               alt='timexonesyncer gif'
//               // rounded='xl'
//             />
//           </Box>
//         </Box>

//         <Box backgroundImage='/mp1.jpg' mt='-10'>
//           <Box
//             maxW='2xl'
//             px={{ base: '10', md: '32' }}
//             pt={{ base: '10', md: '32' }}
//             pb='10'
//             color='whiteAlpha.800'
//           >
//             <Text as='h3' fontSize='4xl'>
//               SingAndShare
//             </Text>
//             <Text>
//               Record and Share your awesome voice on the fly with your friends
//               and rest of the world. SingAndShare makes it easy to record an
//               audio file or choose already recorded file to upload it to our
//               server and allow users to share them to social media like
//               facebook,twitter etc.
//               <Link
//                 ml='4'
//                 color='blue.400'
//                 href='https://sing-share.vercel.app/'
//                 target='_blank'
//               >
//                 https://sing-share.vercel.app/
//               </Link>
//             </Text>
//             <Stack direction='row' mt='3'>
//               <Badge>UI/UX</Badge>
//               <Badge colorScheme='green'>Frontend</Badge>
//               <Badge colorScheme='red'>Backend</Badge>
//               <Badge colorScheme='purple'>DevOps</Badge>
//               <Badge colorScheme='purple'>
//                 <Link href='https://sing-share.vercel.app/' target='_blank'>
//                   Visit Website
//                 </Link>
//               </Badge>
//             </Stack>
//           </Box>

//           <Box display='flex' justifyContent='end' p='4'>
//             <Image src='/sing.gif' alt='singshare gif' />
//           </Box>
//         </Box>
//       </section>

//       {/* blog section */}

//       <section>
//         <Box>
//           <Box backgroundColor='pink.300' px='5' pb='4'>
//             <Flex flexWrap='wrap'>
//               <BlogCard
//                 title='Creating a CRUD Rest API using Nestjs'
//                 categories={['javascript', 'node', 'nestjs', 'rest']}
//                 description='Nestjs is a nodejs framework that comes with lots of features out of the box unlike others such as expressjs, fastify which are minimal. Nestjs makes use of typescript by default which gives type safety to the project. Thus, keeping it safe from type errors which are quite common with javascript.'
//               />
//               <BlogCard
//                 title='Creating a CRUD Rest API using Nestjs'
//                 categories={['javascript', 'node', 'nestjs', 'rest']}
//                 description='Nestjs is a nodejs framework that comes with lots of features out of the box unlike others such as expressjs, fastify which are minimal. Nestjs makes use of typescript by default which gives type safety to the project. Thus, keeping it safe from type errors which are quite common with javascript.'
//               />

//               <BlogCard
//                 title='Creating a CRUD Rest API using Nestjs'
//                 categories={['javascript', 'node', 'nestjs', 'rest']}
//                 description='Nestjs is a nodejs framework that comes with lots of features out of the box unlike others such as expressjs, fastify which are minimal. Nestjs makes use of typescript by default which gives type safety to the project. Thus, keeping it safe from type errors which are quite common with javascript.'
//               />
//             </Flex>

//             <Box display='flex' justifyContent='end' my='4'>
//               <Button>More posts</Button>
//             </Box>
//           </Box>
//         </Box>
//       </section>

//       {/* social media section */}
//       <section>
//         <Box display='flex' flexDirection='column' alignItems='center' my='20'>
//           <Text fontSize='6xl'>Stay In Touch</Text>
//           <HStack spacing='10'>
//             <Link href='#' target='_blank'>
//               <GrMail size={30} />
//             </Link>

//             <Link href='#' target='_blank'>
//               <AiFillInstagram size={30} />
//             </Link>

//             <Link href='#' target='_blank'>
//               <AiFillYoutube size={30} />
//             </Link>

//             <Link href='#' target='_blank'>
//               <AiOutlineTwitter size={30} />
//             </Link>
//           </HStack>
//         </Box>
//       </section>

//       <section>
//         <Box mx={5} display='flex' justifyContent='center' my='10'>
//           <Text>
//             Images by
//             <Link
//               href='https://unsplash.com/@marekpiwnicki'
//               target='_blank'
//               mx='2'
//             >
//               Marek Piwnicki &
//             </Link>
//             <Link href='https://www.pexels.com/@pixabay' target='_blank'>
//               Pixabay
//             </Link>
//           </Text>
//         </Box>
//       </section>
//     </Box>
//   );
// }

// type BlogCardItemProps = {
//   title: string;
//   categories?: string[];
//   description: string;
// };

// export const BlogCard: React.FC<BlogCardItemProps> = ({
//   title,
//   children,
//   categories,
//   description,
// }) => {
//   return (
//     <Box
//       mx={{ base: '1', md: '4' }}
//       mt='4'
//       w={{ base: '100%', md: 'sm' }}
//       rounded='sm'
//       p='3'
//       bg='gray.300'
//     >
//       <Text fontSize='xl' isTruncated color='green.500'>
//         <Link href='#' target='_blank'>
//           {title}
//         </Link>
//       </Text>

//       <Stack direction='row' my='2'>
//         {categories.map((category) => (
//           <Badge key={category}>{category}</Badge>
//         ))}
//         <Badge colorScheme='green'>20th dec,2020</Badge>
//       </Stack>

//       <Text noOfLines={10}>{description}</Text>

//       <Box display='flex' justifyContent='end'>
//         <Button>Read Blog</Button>
//       </Box>
//     </Box>
//   );
// };

// type SpecialGridItemProps = {
//   title?: string;
//   description: string;
// };

// export const SpecialGridItem: React.FC<SpecialGridItemProps> = ({
//   title,
//   description,
//   children,
// }) => {
//   return (
//     <GridItem p='3'>
//       <Text fontSize='4xl'>{title}</Text>
//       <Text color='gray.700' display='inline'>
//         {description}
//       </Text>
//       {children}
//     </GridItem>
//   );
// };
