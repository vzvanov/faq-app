# Frequently Asked Questions (FAQ) list (MERN solution)

 This is a CRUD frequently asked questions (FAQ) application implemented on the MERN stack.

![Home](/img/img01.jpg "Home")
![Admin](/img/img02.jpg "Admin")
![Edit](/img/img03.jpg "Edit")

## To start

Clone the repository.

Install "npm install" or "npm i" dependencies.

## Server

Implemented on [NodeJS](https://nodejs.org/).

The database structure is a table: faqs.

Example:

{
  "faq": [
    {
      "_id": 6744556273,
      "summary": "What is the maximum file upload size?",
      "info": "No more than 2GB. All files in your account must fit your allotted storage space."
    }
  ]

}

To run in the project directory:

### `cd server`

### `npm run server`

Open [http://localhost:5000](http://localhost:5000) to view in a browser.

## Client

To run in the project directory:

### `cd faq-app`

### `npm start`

The application starts [http://localhost:3000](http://localhost:3000) in the browser.
