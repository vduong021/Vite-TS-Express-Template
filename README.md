## How to Install

Clone the repository into your local machine.

Install all required dependencies.

```bash
  npm install 
```

Run on dev environment

```bash
  npm run dev
```

Alternatively, the application is being hosted on the following link through Vercel:

```
  https://vite-ts-express-template-a3b60hnub-vduong021.vercel.app/
```

## Environment Variables

To run this program, you will need to create an `.env` file in the repository's root directory and add the following environment variables to your `.env` file. MONGODB was used as a database for this application.

```
MONGODB_URL= "[MONGODB_URL]"

```

## Considerations
This project includes the following:
-Must be written with JavaScript or Typescript (preferred)
-Note Form must have the following validations
---Must not be shorter than 20 characters
---Must not be longer than 300 characters
-Main page must include all the notes and a way to create a new note
-Main page must include a search bar that will find based on a note's content. (Client or Server query is fine)


In writing this program, I decided to use a MERN stack with some Typescript considerations on the frontend. Alternatively, I could have just done everything on the client side, but thought I could have added more features if built a full stack app (e.g., auth, filtering, etc.). I had to reduce my scope as I was building this app.

Vite was used to for this project due to many built in feature and ease the setup time by a tremendous amount compared to webpack.

React was used on the frontend due to its extensive library. Since this project was in such a small scale, I managed state by just passing data from parent to child components. Thinking back, I could have packaged my queries as a for all my all my components.

## Author

- Vu Duong [@vduong021] (https://www.github.com/vduong021)

## Feedback

If you have any feedback, please reach out to us at vthanhd@gmail.com