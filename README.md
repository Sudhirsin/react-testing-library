Jest

RTL
Javascript testing utility that provides virtual DOM for testing React testing React components
RTL provide a virtual DOM which we can use to interact with and verify the behaviour of a react component
Testing library is infact a family of packages which helps test UI components
The core library is called DOM testing library and RTL is simply a wrapper around the this core library to test React applications in an easier way.

Types of tests
Unit test

- Focus is on testing the individual building the blocks of an application such as class or function or a component
- Each unit or building block is testing in isolation, independent of other units, dependencies are mocked
- Run in a short amount of time and make it very easy to pinpoint failures

Integration test

- Focus is on testing a combination of units and ensuring the work together
- Take longer then unit tests

E2E test

- Focus is on testing the entire application flow and ensuring it works as designed from start to finish
- Involves in a real UI, a real backend database, real services etc
- Take the longest as they cover the most amount of code
- Have a cost implication as you interact with real APIs that may charge based on the muber of requests.

test(name, fn, timeout)

- name - used to identify the test
- fn - fuction that contains the expectations to test
- timeout - default timeout 5s

render - will create the virtual DOM
screen - is object will contain the method to query the dom (screen.getByText())
expect - this method is comes from jest.

TDD (Test Driven Development)

- Test driven development is a software development process where you write tests before writing the software code.
- Once the tests have been written, you then write the code to ensure the tests pass
- 1. Create tests that verify the functionality of a specific feature
- 2. Write software code that will run the tests successfully when re executed
- 3. Refactor the code for optimization while ensuring the tests continue to pass
     Also called red-green testing as all the tests from a red failed state to a green passed state.

Jest

- watch
  -- watch mode is an option that we can pass to jest to watch files that have changed since the last commit and execute tests related only to those changed files
  -- An optimization designed to make your tests run fast regardless of how many tests you have

Filter the test
yarn test will show the other tags
a - run the all the files
o - run the test in changed file
p - filter the filename ex. App
t - filter by test name ex. name

test.only()
test.skip() // skip executing the test
