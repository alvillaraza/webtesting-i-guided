# Testing

## Objectives
- setup testing from scratch
- write unit tests
- Test Driven Development


AAA = Arrange -> Act -> Assert

function(args) => return value; 
# To test a funciton, we invoke a function, ispect the resturn value

Component(props) => return UI; 
# To test a component, we render a component

Endpoint(data) => return HTTPresponse; 
# To test API, we make a request. Inspect the response

Test suite: a group of tests

*Make sure your test can fail

## User Stories
As a...role
I want...a feature
so that ...value

As an analyst
I want a calculator that can add two numbers
So that I can write the sales reports

## Scenarios
```txt
Given ...
  and ...
  and ...
When ...
  and ...
  and ...
Then ...
  and ...
```

Given two numbers
When the add function is invoked
Then, it should return the sum of the two numbers

## Test Driven Development/Design
Red > Green > Refactor ----> Commit

Red: write a failing test
Green: write enough implementation code to make the test pass.
Refactor: rewrite the code without changing the functionality, reformatting the code without breaking the test


# Steps for Unit Testing
package.json
  "scripts"
    "test": "jest --watch"

Terminal
npm i -D jest
npm test

Create Folder: __tests__
must be named __tests__ because Jest will look for this


