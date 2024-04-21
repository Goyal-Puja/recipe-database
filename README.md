# Recipe Management System

This project consists of a frontend and backend for managing recipes. The frontend is built using Angular, and the backend is built using NestJS and PostgreSQL.

## Backend

This is a simple RESTful API for managing recipes. It allows you to perform CRUD operations (Create, Read, Update, Delete) on recipes, including their ingredients.

## Technologies Used

* Node.js
* NestJS
* TypeScript
* PostgreSQL
* TypeORM

## Installation

1. Clone the repository:
   <pre>https://github.com/Goyal-Puja/recipe-database.git</pre>

2. Go to the backend directory and install dependencies:
   <pre>
     cd recipe-backend
     npm install
   </pre>

3. Set up your database connection in the app.module.ts file.

4. Run the application:
   <pre>npm run start</pre>

## Usage

Once the application is running, you can interact with the API using HTTP requests. You can use tools like Postman or curl to send requests.

## API Endpoints
1. Get all recipes
   <pre>GET : /api/recipes</pre>
![Screenshot 2024-04-21 203959](https://github.com/Goyal-Puja/recipe-database/assets/47891452/44045278-dbdf-4d54-a8f0-dc09a6f45b80)

2. Get a single recipe by ID
   <pre>GET : /api/recipes/:id</pre>
![Screenshot 2024-04-21 204033](https://github.com/Goyal-Puja/recipe-database/assets/47891452/0c1b4992-d1f5-4816-a9cd-2b2ef36fae8e)

3. Create a new recipe
   <pre>POST : /api/recipes</pre>
![Screenshot 2024-04-21 204141](https://github.com/Goyal-Puja/recipe-database/assets/47891452/feb66960-777d-4856-8df3-f5bf157f55ac)

4. Update a recipe by ID
   <pre>PUT : /api/recipes/:id</pre>
![Screenshot 2024-04-21 204224](https://github.com/Goyal-Puja/recipe-database/assets/47891452/90702f69-b17e-4d0c-bbe1-7661bd6a45af)

5. Delete a recipe by ID
   <pre>DELETE : /api/recipes/:id</pre>
![Screenshot 2024-04-21 204242](https://github.com/Goyal-Puja/recipe-database/assets/47891452/e75b5576-2a77-4d04-8696-4825d1eddc29)


## Frontend

The frontend is responsible for providing a user interface for managing recipes. It allows users to view, create, update, and delete recipes through a web application.

## Technologies Used

* Angular
* TypeScript
* HTML/CSS

## Installation

1. Clone the repository:
   <pre>https://github.com/Goyal-Puja/recipe-database.git</pre>

2. Go to the frontend directory and install dependencies:
   <pre>
     cd recipe-frontend
     npm install
   </pre>

3. Run the application:
   <pre>ng serve</pre>

## Note

I'm still working on completing the frontend for the Recipe Management System. While the backend is functional, some parts of the frontend are still in progress. 
I appreciate your understanding as I continue to improve the system. Your feedback is valuable to me as I aim to make this tool easy to use for everyone. 
Let's keep working together to create a recipe management solution that's helpful and user-friendly.

