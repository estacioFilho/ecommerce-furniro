Furniro Clone – Fullstack Project Documentation
Overview
This project is a fullstack clone of the Furniro e-commerce platform.
It was developed for learning purposes, to explore modern web application architecture and demonstrate how to build an end-to-end solution integrating a RESTful API with a dynamic frontend.

The project replicates key e-commerce functionalities, including:

Product catalog with pagination

Filtering and sorting

Product detail pages

Responsive layout inspired by the original Furniro design

Technologies Used
Layer	Technologies
Backend	NestJS (Node.js framework), TypeORM, PostgreSQL, Docker
Frontend	React.js, TypeScript, React Icons
Others	Docker Compose, ESLint, Prettier

Architecture
Backend: RESTful API built with NestJS and TypeORM, managing data in a PostgreSQL database.

Frontend: React application that consumes the API and displays data to users.

Docker: Used to containerize the database and standardize development environments.

Database: Structured to handle products, categories, reviews, and related entities.

Features
Product listing with pagination

Filtering by category and ordering by price or other criteria

Dynamic limit selection for items per page

Individual product detail page

Modular and scalable API built with NestJS

Strongly typed data using DTOs and validation

Responsive, modern frontend developed with React and TypeScript

Docker setup for simplified local development

Technical Details
Backend
NestJS: Modular architecture with controllers, services, DTOs, and validation.

TypeORM: ORM for PostgreSQL, handling CRUD operations and migrations.

Docker: Includes Dockerfile and docker-compose.yml for orchestration.

Validation: Uses class-validator to enforce data integrity.

Frontend
React with TypeScript: Type safety and component-driven structure.

Components for product cards, product lists, filters, pagination, header, footer, etc.

React Icons: Lightweight icon library.

Fully responsive design optimized for different screen sizes.

Running the Project
Backend
bash
Copiar
Editar
cd backend
docker-compose up -d

npm install
npm run start:dev
Frontend
bash
Copiar
Editar
cd frontend
npm install
npm run dev
Possible Improvements
Authentication and user accounts

Shopping cart and checkout flow

Admin panel for product and order management

Image upload and storage

Unit and integration tests

Author
Developed by Estácio Queiroz as a study project to practice building a fullstack e-commerce application with React, NestJS, TypeORM, PostgreSQL, and Docker.