JavaScript Web Scraping

This project contains a set of Node.js scripts that demonstrate how to perform file operations and web requests using JavaScript. All scripts are executed on Ubuntu 14.04 LTS using Node.js v10.14.x and follow semistandard coding style.

Requirements
Allowed editors: vi, vim, emacs
Node.js version: 10.14.x
 

Scripts Overview
0. Read File Content

File: 0-readme.js

Reads a file (UTF-8) and prints its content.
If an error occurs, prints the error object.

Usage:

./0-readme.js file_path
1. Write to File

File: 1-writeme.js

Writes a string to a file in UTF-8 encoding. Overwrites existing content.

Usage:

./1-writeme.js file_path "string"
2. Display HTTP Status Code

File: 2-statuscode.js

Sends a GET request and prints the HTTP status code.

Output format:

code: <status code>

Usage:

./2-statuscode.js URL
3. Star Wars Movie Title

File: 3-starwars_title.js

Fetches and prints the title of a Star Wars movie using its ID.

API:
https://swapi-api.alx-tools.com/api/films/:id

Usage:

./3-starwars_title.js movie_id
4. Count Wedge Antilles Appearances

File: 4-starwars_count.js

Counts how many Star Wars movies contain the character Wedge Antilles (ID 18).

Usage:

./4-starwars_count.js https://swapi-api.alx-tools.com/api/films
5. Request and Store Webpage

File: 5-request_store.js

Fetches a webpage and stores its content in a file (UTF-8).

Usage:

./5-request_store.js URL file_path
6. Count Completed Tasks by User

File: 6-completed_tasks.js

Fetches a list of TODOs and counts completed tasks per user ID.

Only users with completed tasks are printed.

Usage:

./6-completed_tasks.js https://jsonplaceholder.typicode.com/todos
Technologies Used
Node.js
request module
fs module (File System)
REST APIs
JSON parsing