import React from 'react';
import {
  Badge,
  Box,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Blog } from '../playlists';
import { BlogCard } from '..';

const BlogPage = () => {
  const blog: Blog = {
    title: 'Creating rest end points with Nestjs',
    categories: ['nestjs', 'webdev'],
    description: `Nestjs is a nodejs framework that comes with lots of features out of the box unlike others such as expressjs, fastify which are minimal. Nestjs makes use of typescript by default which gives type safety to the project. Thus, keeping it safe from type errors which are quite common with javascript.

    In this tutorial, we are going to create a simple application that will help us create, read, update and delete notes about a topic.
    Complete Project Github Repo
    
    First thing first make sure you have installed nodejs into
    your machine. node -v if it gives back some version number then we are good to go otherwise make sure you download and install nodejs from here nodejs download
    
    Now lets install nest cli;
    npm i -g @nestjs/cli
              or
    yarn global add @nestjs/cli
    Let's create a brand new project using nest cli and I will name my project mynotes.
    nest new mynotes
    This will create mynotes folder and a bunch of files that will get us up in running with nestjs. The main.ts file inside the src directory contains the main logic to start the nest application.
    Nestjs under the hood makes use of expressjs for HTTP implementation by default so we see expressjs like syntax to start the application.
    
    Before going through other files there are some term some terms that we need to know about nestjs;
    
    Module In nest we divide our project into several modules and these modules can be imported by other modules in the same project. It is also used to register imports, controllers and providers
    Controllers It is the actual route handlers
    Services It contains the actual business logic that will be executed on the controllers
    Repository It is used to define the data stores e.g Database entity i.e table
    Now we know the basic terminologies, Let's go through all the other files created for us
    
    app.module.ts this file registers all the controllers and providers that are available in this module
    app.controllers.ts this file has an actual Get route handler that returns hello world using the app service
    app.services.ts is injectable meaning we can use dependency injection that is how we are making use of getHello function on our app.controllers.ts file.
    app.controller.spec.ts is a test file where we can write a unit test.
    For this tutorial, we will only use the app.module.ts, app.controller.ts, and main.ts files. we will not make use of any other files so we can delete them.
    Folder structure
    Update the code in app.module.ts and app.service.ts to;
    //app.module.ts
    import { Module } from '@nestjs/common';
    import { AppController } from './app.controller';
    
    @Module({
      imports: [],
      controllers: [AppController],
    })
    export class AppModule {}
    
    //app.controller.ts
    import { Controller, Get } from '@nestjs/common';
    
    @Controller()
    export class AppController {
      @Get()
      getHello(): string {
        return 'hello world';
      }
    }
    Now let's create the POST endpoint to create the new notes with topic and description as a string for that we can use @post and @BODY decorator from the @nest/common
    import { Body, Controller, Get, Post } from '@nestjs/common';
    
    type note = {
      topic: string;
      description: string;
      id: number;
    };
    
    @Controller()
    export class AppController {
      notes: note[] = [];
    
       @Post()
      createnote(@Body() { description, topic }: note) {
        const randomId = Math.floor(Math.random() * 999);
        const note = { description, topic, id: randomId };
        this.notes.push(note);
        return note;
      }
    }
    This will accept the post request at the root route and create a note and append it to the array. It returns the post created.
    
    Now let's create the GET endpoint that will return all the notes created and another that will return the note by id.
    @Get()
      getAllnote(): note[] {
        return this.notes;
      }
    
      @Get('/:id')
      getNoteById(@Param('id') id: number): note {
        const noteIndex = this.notes.findIndex((note) => note.id === Number(id));
        return this.notes[noteIndex];
      }
    
    Let's add the update functionality using a PUT endpoint
     @Put('/:id')
      updatenote(@Param('id') id: number, @Body() newNote: Partial<note>): note {
        const noteIndex = this.notes.findIndex((note) => note.id === Number(id));
        this.notes[noteIndex] = { ...this.notes[noteIndex], ...newNote };
        return this.notes[noteIndex];
      }
    Finally, Let's implement the DELETE method
     @Delete('/:id')
      deletenote(@Param('id') id: number): boolean {
        const noteIndex = this.notes.findIndex((note) => note.id === Number(id));
        if (noteIndex === -1) return false;
        delete this.notes[noteIndex];
        return true;
      }
    We used the POST method to create the new note, the GET method to get notes, the PUT method to update the note, and the Delete method to delete the notes. So, that is it about this CRUD tutorial.
    In the next tutorial, we'll talk about the request validation using DTO in nest. Till then stay tuned. Have a good day and Thank you for reading till the end.`,
  };
  return (
    <Box>
      {/* author intro */}
      <section>
        <Flex>
          <Box
            border='1px'
            m='2'
            h='100vh'
            p='5'
            w='3xl'
            borderColor='gray.500'
          >
            <Flex>
              <Image src='/bg.png' boxSize={100} rounded='full' alt='me' />
              <Box>
                <Text>Bishal Neupane</Text>
                <Text color='gray.400'>Published date 20th dec,2020</Text>
              </Box>
            </Flex>
            <Box mt='2' mb='5'>
              <Text fontSize='4xl'>Creating a CRUD Rest API using Nestjs</Text>
              <Stack direction='row'>
                <Badge>Nestjs</Badge>
                <Badge>Webdev</Badge>
                <Badge>RestApi</Badge>
              </Stack>
            </Box>
            <Box>
              Nestjs is a nodejs framework that comes with lots of features out
              of the box unlike others such as expressjs, fastify which are
              minimal. Nestjs makes use of typescript by default which gives
              type safety to the project. Thus, keeping it safe from type errors
              which are quite common with javascript. In this tutorial, we are
              going to create a simple application that will help us create,
              read, update and delete notes about a topic. Complete Project
              Github Repo First thing first make sure you have installed nodejs
              into your machine. node -v if it gives back some version number
              then we are good to go otherwise make sure you download and
              install nodejs from here nodejs download
            </Box>
          </Box>
          <Box
            border='1px'
            display={{ base: 'none', lg: 'block' }}
            m='2'
            h='100vh'
            overflow='scroll'
            p='5'
            w='lg'
            borderColor='gray.500'
            sx={{
              '&::-webkit-scrollbar': {
                width: '12px',
                borderRadius: '8px',
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
            }}
          >
            <Text ml='3'>Some other post on same playlist</Text>
            <BlogCard
              title='Nestjs project setup'
              description='project setup'
              categories={['nestjs', 'webdev']}
            />
            <BlogCard
              title='Nestjs fundamental '
              description='Fundamentals of node'
              categories={['nestjs', 'webdev']}
            />
            <BlogCard
              title='Nestjs fundamental '
              description='Fundamentals of node'
              categories={['nestjs', 'webdev']}
            />
            <BlogCard
              title='Nestjs fundamental '
              description='Fundamentals of node'
              categories={['nestjs', 'webdev']}
            />
          </Box>
        </Flex>
      </section>
    </Box>
  );
};

export default BlogPage;
