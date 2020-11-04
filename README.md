# unitTestForQA

## Unit Test definition
ISTQB :
2.2.1 Component Testing
Objectives of component testing
Component testing (also known as unit or module testing) focuses on components that are separately
testable. Objectives of component testing include: 
 Reducing risk 
 Verifying whether the functional and non-functional behaviors of the component are as designed
and specified 
 Building confidence in the component’s quality 
 Finding defects in the component 
 Preventing defects from escaping to higher test levels
In some cases, especially in incremental and iterative development models (e.g., Agile) where code
changes are ongoing, automated component regression tests play a key role in building confidence that
changes have not broken existing components.
Component testing is often done in isolation from the rest of the system, depending on the software
development lifecycle model and the system, which may require mock objects, service virtualization,
harnesses, stubs, and drivers. Component testing may cover functionality (e.g., correctness of
calculations), non-functional characteristics (e.g., searching for memory leaks), and structural properties
(e.g., decision testing). 

## TDD
ISTQB:
Test driven development is highly iterative and is
based on cycles of developing automated test cases, then building and integrating small pieces of code,
then executing the component tests, correcting any issues, and re-factoring the code. This process
continues until the component has been completely built and all component tests are passing. Test driven
development is an example of a test-first approach. While test driven development originated in eXtreme
Programming (XP), it has spread to other forms of Agile and also to sequential lifecycles
