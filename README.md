# Pretend Bank Encoder

A simple web application that encodes or decodes pretend bank messages using the Caesar Cipher technique.

## Features

- Accepts a user input message (plain text or encoded).
- Accepts a numeric key (shift value).
- Allows user to choose between encoding or decoding.
- Displays the result on the page.
- Built using Test Driven Development (TDD) principles with Jest.
- Red-Green-Refactor cycle followed.

## Technologies Used

- HTML5
- Styled with TailWindCSS
- Vanilla JavaScript (ES6)
- Jest for testing (TDD Framework)

## How it Works

The Caesar Cipher shifts each letter of the message by a specified number of positions in the alphabet.

- Encoding shifts the letters **forward** by the key.
- Decoding shifts the letters **backward** by the key.
- Non-letter characters (like numbers, spaces, and punctuation) are left unchanged.

## Project Structure
caesar-cypher-app/
│
├── index.html          # User interface
├── cypher.js            # Cipher logic (encode and decode functions)
├── cypher.test.js       # Jest test file
├── package.json         # Project configuration and dependencies
├── README.md            # Project documentation (this file)
├── node_modules/        # Installed npm packages