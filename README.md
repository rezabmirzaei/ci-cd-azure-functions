# CI/CD - Azure Functions

A simple demo of an HttpTrigger Azure Functions app, developed using **Visual Studio Code** and deployed to Azure using GitHub Actions. 

## Prerequisites

* [Node](https://nodejs.org/en/download/) - For local development of Function app
  * [azure-functions-core-tools](https://www.npmjs.com/package/azure-functions-core-tools/v/4.0.3928)
* [Visual Studio Code](https://code.visualstudio.com/download) (or any other modern IDE that supports development/deployment of Azure services, e.g. IntelliJ)
  * [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) and [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack) extensions (or similar for you IDE of choice)
* [Azure account](https://azure.microsoft.com/en-us/free/) and [subscription](https://learn.microsoft.com/en-us/dynamics-nav/how-to--sign-up-for-a-microsoft-azure-subscription)

## Development and deployment setup

Follow [this guide](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node?pivots=nodejs-model-v4#create-an-azure-functions-project) to:

* Connect to your active Azure account
* Create an Azure Functions resource in Azure
* Optional: Create and test an Azure Functions app locally (or just test and deploy the one provided here)
* Deploy the Functions app to Azure

## Create/modify the GitHub Actions workflow

Set up your CI/CD pipeline (GitHub Actions) using [this guide](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions?tabs=windows%2Cjavascript&pivots=method-manual) to:

* Generate deployment credential (``AZURE_FUNCTIONAPP_PUBLISH_PROFILE``)
* Create/modify the workflow from a template (``AZURE_FUNCTIONAPP_NAME``)