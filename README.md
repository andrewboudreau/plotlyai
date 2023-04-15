# README

## Introduction

This code creates a simple web application that serves a single HTML file named "index.html" when a user requests the root URL of the application.

## Usage

To use this code, follow these steps:

1. Copy and paste the code into a new file in your preferred text editor.
2. Save the file with a `.cs` extension (e.g., `app.cs`).
3. Make sure you have the .NET SDK installed on your machine.
4. Open a command prompt or terminal window and navigate to the directory where you saved the file.
5. Run the command `dotnet run` to build and run the application.
6. Open a web browser and navigate to `http://localhost:5000`.

The browser should display the contents of the `index.html` file.

## Explanation
The code then creates a new instance of the `WebApplication` class using the `CreateBuilder` method, which sets up the application's middleware pipeline.

Next, the code maps a GET request to the root URL (`"/"`) to a lambda function that returns the `index.html` file using the `Results.File` method.

Finally, the code calls the `RunAsync` method on the `WebApplication` instance to start the application and listen for incoming HTTP requests.

## License

This code is released under the MIT License.