# Angular Reference Sheet
Note that the official Angular docs are available at https://angular.io/docs, but this reference sheet displays all the necessary information that pertains to our application.
# Setup
First, you need to make sure that node.js and npm package manager are installed. To install node.js, go to https://nodejs.org/en/, or if on Unix use the command `sudo apt install nodejs`. Angular uses libraries that can be managed with npm. For windows, npm should automatically be installed with node.js. On Unix, it can be installed with `sudo apt install npm`.

## Step 1: Install the Angular CLI
CLI stands for command line interface, which means the Angular CLI's function is to provide an interface to the Angular Framework. It can be used to create projects, generate application and library code, and perform a variety of ongoing development tasks. To install the CLI, use the command `npm install -g @angular/cli`, which installs the cli globally on your machine. Note: this may take root access to install so try adding `sudo` to beginning of command if installation fails.

## Step 2: Create a Workspace
**This step can be skipped if cloning the project from github, but can be useful for setting up a test application to get familiar with creating a workspace.** In Angular, apps are developed in the context of a *workspace*. To create a new workspace and initial project, run the cli command `ng new [app-name]`. The Angular CLI installs the necessary dependencies and creates an app that is ready to run.

## Step 3: Run the application
Angular CLI comes with a built in server that can compile and launch a workspace with two commands. First, change to the project directory (in this case our comic book project workspace, which is located at `/EE461L_Project/frontend/icdb`). Once you are in the workspace folder, you can launch the server with the command `ng serve --open`. At this point, the Angular CLI launches the server that runs your workspace and watches your workspace files and rebuilds the app when you make changes to those files. The --open (or -o) flag automatically opens a browser tab with a connection to the server.

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
Components define a class that contains the app's data and logic. Separately, they control a *view*, or the template for how everything should be rendered on the screen. For phase I, we will need to create 14 components, per the 14 static pages requirement. Skip to Modules now if following for Phase I.

## Modules
An Angular *NgModules* declares a compilation context for a set of components that is dedicated to an application domain. An NgModule can associate its components with related code, such as services, to form functional units. Every Angular app has a root module, typically named *AppModule* that bootstraps the application.

Like Javascript modules (or Java packages), NgModules can import functionality from other NgModules or export their own functionality. Skip to Navigation now if following for Phase I.

# Navigation
The Angular *router* NgModule is a service that lets you define the navigation path among the different application states in the app. It's usage is similar to conventional browser navigation:
* Enter a URL in the address bar and the browswer navigates to a corresponding page.
* Click links on the page and the router navigates to a new page.
* Click the browser's back and forward buttons and the router navigates accordingly.
In Angular's case, the router maps URL's to *views* instead of pages. 

## `<Base>` Element
The `<base>` element can be added as the first child in the `<head>` tag of an index.html file. Using the `href` attribute, this element tells the router how to compose navigation URL's for this view. For example, if we are adding this element to an index.html file that in a folder that is the application root, the element should look like `<base href="/">`.

## Importing the Router
Since the router module is an optional service and is not part of the Angular core, we will need to import it into the component that wishes to use it. Import it by adding `import { RouterModule, Routes } from '@angular/router';` to the top of the component file (`.ts`) that wishes to use it.

## Configuration
There is only one singleton instance of an Angular router for per application. When the browser's URL changes, that router looks for a corresponding *Route* from which it can determine the component to display. A router has no routes until you add some.

To configure a router, we must give it a list of route definitions. Each route definition is defined as a *Route Object* which has two fields: 
1. A *path*, or the URL path for this route.
1. A *component*, or the component associated with this route.
Once we define our list of route definitions, we pass it to the RouterModule.forRoot() method. This method returns a module that contains the configured Router service provider. Essentially, it makes the router service available everywhere in the application. An example `src/app/app-routing.module.ts` file is below.
```
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CrisisListComponent }   from './crisis-list/crisis-list.component';
import { HeroListComponent }     from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
```
Now, in the `src/app/app.module.ts` file, we must import the routing module with `import { AppRoutingModule } from './app-routing.module';` and add it to the NgModule import: 
```
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  ```

# Data Flow

# Helpful Definitions
* Workspace - A collection of Angular projects that are powered by the Angular CLI and are typically located in a single-source version control directory like git.
