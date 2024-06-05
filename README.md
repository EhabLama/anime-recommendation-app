# Anime Recommendation App

## Description

This project is a web application for browsing anime listings, signing up, logging in, and viewing user profiles.

## Features

- Browse anime listings
- Sign up for a new account
- Log in to an existing account
- View user profile information

## Technologies Used

- React for the frontend
- NestJS for the backend microservices
- PostgreSQL for the database
- Knex.js for database queries
- JWT for authentication

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   
2. **Create .env file:**

Copy contents from .env.example file to your .env file, and generate a JWT_TOCKEN using this bash command and add it to your .env file as well

```bash
openssl rand -base64 32
```

3. **Run the services using Docker Compose:**

```bash
docker-compose up --build
```

### Access the frontend:

The frontend can be accessed at http://localhost:3000.

## Usage
Browse anime listings: Navigate to the Anime page.
Sign up: Click on the Sign Up link in the navigation bar and fill out the form.
Log in: Click on the Log In link in the navigation bar and enter your credentials.
View user profile: Click on the Profile icon in the navigation bar.


## License
This project is licensed under the MIT License - see the LICENSE file for details.
