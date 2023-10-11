# JsonDatabaseFiller

JsonDatabaseFiller is a Node.js application designed to import large JSON data into a SQLite database. It reads a newline delimited JSON (NDJSON) file, processes it line by line, and inserts the data into a SQLite database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (Download and install from [here](https://nodejs.org/))
- SQLite3

### Installation

1. Clone the repository or download the zip file and extract it.
```bash
git clone git@github.com:thomas-beylemans/JsonDatabaseFiller.git
```

Install dependencies.
```bash
cd JsonDatabaseFiller
npm install
```

## Usage
1. Ensure your NDJSON file is placed in the data directory and named myjson.json (or adapt the code).
2. Update the createTableQuery variable in importData.js with your database structure if necessary.
3. Run the application.
```bash
npm start
```

You will see a message indicating the import process has started. Once completed, a message will display indicating the import process has finished and the database connection has been closed.

## Built With
* [Node.js](https://nodejs.org/) - JavaScript runtime
* [sqlite3](https://www.npmjs.com/package/sqlite3) - SQLite3 library for Node.js
* [ndjson](https://www.npmjs.com/package/ndjson) - Newline Delimited JSON streaming parser and serializer
