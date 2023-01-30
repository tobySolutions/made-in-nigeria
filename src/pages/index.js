import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import ArticleCard from '../components/ArticleCard';
import AcceptingContributions from '../components/AcceptingContributions';

import { Box } from '@chakra-ui/react';
import BuiltByNigerians from '../components/BuiltByNigerians';

/*
  Notice: This is going to be the landing page
*/

// markup
const IndexPage = () => {
  return (
    <Layout>
      <ChakraProvider>
        <main>
          <title>Home Page</title>
          <p>The journey to Made in Nigeria V2 begins.</p>
          <Link to="/about">About Made in Nigeria </Link>
        </main>
        <NavBar />
        <ProjectCard />
        <Box margin={10}>
          <SecondaryButton text="See All Projects" link="https://madeinnigeria.dev" />
        </Box>
        <Box margin={10}>
          <PrimaryButton text="Read About Us" link="https://madeinnigeria.dev" />
        </Box>
        <ArticleCard />
        <Box margin={3} display="flex" justifyContent="center">
          <AcceptingContributions />
        </Box>
        <Box display="flex" justifyContent="center" marginBottom={10}>
          <BuiltByNigerians />
        </Box>
      </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;
