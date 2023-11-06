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
        <li><a href="#how-to-start-the-project-for-development-purposes">How to start the project for development purposes</a></li>
     </ul>
    </li>
  </ol>
</details>

## About the project

This project is a web application that allows users to see products in a table after login.

### Features
- **User Login:** Users can log in with their username and password. User login information is stored in a database table called "user" without encryption.
- **Data Table:** After logging in, a table is displayed, showing data from the "data" table. The table columns include: Item Number, Item Name, Net Price, and Tax.
- **Dynamic Sorting:** Users can dynamically sort the columns in ascending or descending order without page reloading.
- **Dynamic Search:** The application provides a search feature that dynamically filters the data based on user input without page reloading. Matching parts of the data are highlighted.
- **PDF Export:** Users can export the filtered list to a PDF file.

## Built with
* [![Angular][angular.ts]][angular-url]
* [![Typescript][ts]][ts-url]
* [![C#][csharp]][csharp-url]
* [![.Net][dotnet]][dotnet-url]


<!-- MARKDOWN LINKS & IMAGES -->
[angular.ts]: https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[csharp]: https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white
[csharp-url]: https://learn.microsoft.com/en-us/dotnet/csharp/
[ts]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[ts-url]: https://www.typescriptlang.org/
[dotnet]: https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white
[dotnet-url]: https://dotnet.microsoft.com/en-us/
