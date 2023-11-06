# Netlient Homework

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#built-with">Built with</a>
    </li>
    <li>
      <a href="#getting-started">Getting started</a>
		 <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
	<li><a href="#build-and-run">Build & Run</a></li>
     </ul>
    </li>
  </ol>
</details>

## About the project
![About The Project Screenshot][screenshot]

This project is a web application that allows users to see products in a table after login.

### Features
- **User Login:** Users can log in with their username and password. User login information is stored in a database table called "user" without encryption.
- **Data Table:** After logging in, a table is displayed, showing data from the "data" table. The table columns include: Item Number, Item Name, Net Price, and Tax.
- **Dynamic Sorting:** Users can dynamically sort the columns in ascending or descending order without page reloading.
- **Dynamic Search:** The application provides a search feature that dynamically filters the data based on user input without page reloading. Matching parts of the data are highlighted.
- **PDF Export:** Users can export the filtered list to a PDF file.

## Built with
* [![C#][csharp]][csharp-url]
* [![.Net][dotnet]][dotnet-url]
* [![Angular][angular.ts]][angular-url]
* [![Typescript][ts]][ts-url]

## Getting started
### Prerequisites
- Node.js and npm installed on your machine
- .NET SDK (version 7.0 or higher) installed on your machine

<a name="build-and-run"></a>
### Build & Run
1. Clone the repository to your local machine:
```sh
git clone git@github.com:LBlanka99/netlient-homework.git
```
2. Build and run the C# project to start the server:
```sh
dotnet build
cd NetlientHomework
dotnet run
```
3. In a separate terminal, navigate to the Angular project directory:
```sh
cd your-path-to-the-project-folder/NetlientHomework/ClientApp
```
4. Install Angular dependencies by running:
```sh
npm install
```
5. Start the Angular development server:
```sh
npm start
```

The application should now be running locally at https://localhost:44405/. You can access it in your web browser.<br>
You can log in with default username: admin, and default password: 123.


<!-- MARKDOWN LINKS & IMAGES -->
[angular.ts]: https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[csharp]: https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white
[csharp-url]: https://learn.microsoft.com/en-us/dotnet/csharp/
[ts]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[ts-url]: https://www.typescriptlang.org/
[dotnet]: https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white
[dotnet-url]: https://dotnet.microsoft.com/en-us/
[screenshot]: NetlientHomework/images/picture1.png
