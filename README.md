# CI/CD - Azure Functions

A simple demo of an HttpTrigger Azure Functions app, developed using **Visual Studio Code** and deployed to Azure using GitHub Actions. 

## Prerequisites

* [Node](https://nodejs.org/en/download/) - For local development of Function app
  * [azure-functions-core-tools](https://www.npmjs.com/package/azure-functions-core-tools/v/4.0.3928)
* [Visual Studio Code](https://code.visualstudio.com/download) (or any other modern IDE that supports development/deployment of Azure services, e.g. IntelliJ)
  * [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) and [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) extensions (or similar for you IDE of choice)
* [Azure account](https://azure.microsoft.com/en-us/free/) and [subscription](https://learn.microsoft.com/en-us/dynamics-nav/how-to--sign-up-for-a-microsoft-azure-subscription)
  * An [Azure Functions app](https://learn.microsoft.com/en-us/azure/azure-functions/functions-create-function-app-portal) to host the execution of your functions resource

## Connect to your Azure account (tenant)
In Visual Studio Code, open the Azure Tools extension and connect to you active Azure Account.

## Create an Azure Function (HTTP trigger)
In Visual Studio Code, create a new functions app by [TODO]

## Create/modify the GitHub Actions workflow
[TODO]
* Set up AZURE_FUNCTIONAPP_PUBLISH_PROFILE
* Modify AZURE_FUNCTIONAPP_NAME

## Test the workflow