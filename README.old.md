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
