# LiveJoy

Project bootstrapped using [NodeJS Starter ToolKit](https://github.com/vitorsalgado/create-nodejs-ts).  
Visit the repository for more details.

## Getting Started

Review the generated code, and it's recommended to run a `npm init` to adjust basic project configurations before start.

# Following is the SDLC

**Software Development Lifecycle (SDLC)**

The following is a description of the Software Development Lifecycle (SDLC) process for managing projects using Jira and Github. This document outlines the steps involved in tracking and progressing through various stages of development, code review, and quality assurance.

1. **Ticket Assignment:**
   - A ticket is created and assigned to a developer in the "Todo" column of Jira.
   - Example: "JOB-1 Fix Navbar"
   - Each ticket follows a naming convention: `<TicketName>-<ShortDescription>`, where the TicketName is used as a prefix and the ShortDescription describes the task, with each word capitalized.

2. **Branch Creation:**
   - The developer creates a new branch from the 'master' branch with a name corresponding to the ticket.
   - Example: "JOB-1-NavbarFix"

3. **In Progress:**
   - The ticket is moved to the "In Progress" column, indicating that work has begun.
   - The developer resolves the issues mentioned in the ticket within the assigned branch.

4. **Code Commit and Pull Request (PR):**
   - The developer merges the latest changes from the 'master' branch into their branch before pushing the code.
   - The code is pushed to the developer's branch, and a PR is created.
   - The PR includes a description of why the ticket was assigned and the problem it addresses, as well as a solution section describing the steps taken to resolve the problem.

5. **Code Review:**
   - The developer moves the ticket to the "Code Review" column and shares the PR link with the team.
   - Another team member reviews the code and provides feedback if necessary.
   - If issues are identified, the ticket is sent back to the "In Progress" column, and the process restarts.
   - If no issues are found, the reviewer, not the developer, moves the ticket to the "Code Review Passed" column.

6. **Integration and Testing:**
   - In the "Code Review Passed" state, the developer manually merges their branch with the 'test' branch after pulling the latest changes from the 'master' branch.
   - The ticket is then moved to the "Ready for QA" column, indicating that it is ready for testing.

7. **Quality Assurance (QA):**
   - The tester moves the ticket to the "QA" column and performs the necessary tests.
   - If the ticket passes all tests, it is moved to the "QA Passed" column.
   - If the ticket fails, it is moved directly back to the "In Progress" column, and the process restarts.

8. **Completion and Deployment:**
   - In the "QA Passed" state, the PR is merged, and the ticket is moved to the "Done" column, indicating that it is complete.

This SDLC process ensures a structured workflow for the development, review, and testing of software projects, promoting collaboration and maintaining code quality throughout the project lifecycle.
