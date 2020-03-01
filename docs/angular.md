# Angular Reference Sheet
Note that the official Angular docs are available at https://angular.io/docs, but this reference sheet displays all the necessary information that pertains to our application.
# Setup
First, you need to make sure that node.js and npm package manager are installed. To install node.js, go to https://nodejs.org/en/, or if on Unix use the command `sudo apt install nodejs`. Angular uses libraries that can be managed with npm. For windows, npm should automatically be installed with node.js. On Unix, it can be installed with `sudo apt install npm`.

## Step 1: Install the Angular CLI
CLI stands for command line interface, which means the Angular CLI's function is to provide an interface to the Angular Framework. It can be used to create projects, generate application and library code, and perform a variety of ongoing development tasks. To install the CLI, use the command `npm install -g @angular/cli`, which installs the cli globally on your machine. Note: this may take root access to install so try adding `sudo` to beginning of command if installation fails.

## Step 2: Create a Workspace
**This step can be skipped if cloning the project from github, but can be useful for setting up a test application to get familiar with creating a workspace.** In Angular, apps are developed in the context of a *workspace*. To create a new workspace and initial project, run the cli command `ng new my-app`. The Angular CLI installs the necessary dependencies and creates an app that is ready to run.

## Step 3: Run the application
Angular CLI comes with a built in server that can compile and launch a workspace with two commands. First, change to the project directory (in this case our comic book project workspace, which is located at /EE461L_Project/frontend/icdb). Once you are in the workspace folder, you can launch the server with the command `ng serve --open`. At this point, the Angular CLI launches the server that runs your workspace and watches your workspace files and rebuilds the app when you make changes to those files. The --open (or -o) flag automatically opens a browser tab with a connection to the server.

The full startup tutorial can be found at https://angular.io/guide/setup-local.

# Problems starting appliction with solutions
* When running `ng serve --open` in the workspace folder, compilation fails with the error: `An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'`
  * Run `npm install --save-dev @angular-devkit/build-angular`
  * Run `ng serve --open`
* When running `ng serve --open` in the workspace folder, it fails because you have multiple Angular servers running already.
  * Run `ng update @angular/core --next`. You might need to commit or stash any unsaved git changes.
  
# Architecture
## Basic Overview
The basic building blocks of an angular application are *modules* and *components*. Components define *views*, or sets of screen elements to be displayed, and can use *services*, which provide extra functionality not related to the view. Services can be *injected* into components as a *dependency*. Modules define a compilation context for components. An app always has a root module and typically more feature modules.

## Components
Components define a class that contains the app's data and logic. Separately, they control a *view*, or the template for how everything should be rendered on the screen. For phase I, we will need to create 14 components, per the 14 static pages requirement. Note that one of these components must be the `root component`. Skip to Navigation here if following for Phase I.

# Navigation


# Data Flow

# Helpful Definitions
* Workspace - A collection of Angular projects that are powered by the Angular CLI and are typically located in a single-source version control directory like git.
