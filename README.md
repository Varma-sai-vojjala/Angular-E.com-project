# Steps To Run This Project on your Local Machine
1. first clone this project to your local machine using `git clone` if you are using Git , other wise download zip file.
2. in second step open this project in any of front-end IDE tools like Visual studio code/Atom ..etc as per your comfort zone
3. insight of memory management purpose node_modules are removed from the project while adding it to Github so first install node_modules using `npm install` command
4. also we require JSON server to run this project so install it by using this following command `npm install -g json-server`
5. after completing above steps run project using `ng serve -o`
6. then after take new node command pattle run `json-server --watch .\src\assets\products.json`
7. after hitting all above steps then check localhost:4200 URL in your local machine then you will get to know actual output of project   

# HttpMethods

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
