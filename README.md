# TEA - Time Estimation App

A mini-app that allows the user to estimate the duration of a task.
Inspired by the accepted answer in ["Estimating time costs in legacy codebase"](https://softwareengineering.stackexchange.com/questions/342141/estimating-time-costs-in-legacy-codebase):
```
What you need to do is a three point weighted average. You do three estimates for each piece of work:

- a best case scenario - assuming everything goes right (a)
- a worst case scenario - assuming everything goes wrong (b)
- the actual guess - what you think it probably will take (c)

Your estimate is then (a+b+2c)/4
````

# Methodology used
The app code is stored in three files:

  - **index.html** - contains the HTML of the app page.
  - **css/style.css** - contains the CSS needed to make the app look pretty.
  - **js/index.js** - the JavaScript code that gives the app its functionality.
  
## Tech
* [AngularJS] - Javascript based framework used to implement either MVC or MVVM architectures.
* [Angular Material] - Angular Material is both a UI Component framework and a reference implementation of Google's Material Design Specification.

## Execute App

In your favorite browser, open:

[https://m-oliv.github.io/TEA/](https://m-oliv.github.io/TEA/)

## License
----
MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   
   [git-repo-url]: <https://github.com/m-oliv/TEA.git>
   [AngularJS]: <https://angularjs.org/>
   [Angular Material]: <https://material.angularjs.org/latest/>
