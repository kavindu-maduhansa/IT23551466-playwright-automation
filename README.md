# Playwright Automation Testing Project

## Student Information
- **Name:** Kavindu Maduhansa Liyanage
- **Student ID:** IT23551466
- **Application:** Singlish to Sinhala Translator
- **URL:** https://www.swifttranslator.com/

---

## About This Project

This is my automation testing project for the Software Testing course. I've created 36 automated test cases using Playwright to test a Singlish to Sinhala translation website. The tests check if the translator works correctly with different types of inputs.

## What I Tested

### Positive Tests (24 tests)
These test cases check if the translator works properly with valid inputs:
- Basic phrases and sentences
- Greetings and questions
- Different verb tenses (past, present, future)
- Sentences with brand names and place names
- Text with punctuation and special characters
- Multi-line inputs

### Negative Tests (10 tests)
These test cases check how the translator handles problematic inputs:
- Words joined together without spaces
- Slang and typos
- Too many spaces
- Empty input
- Special characters only
- Mixed English abbreviations

### UI Tests (2 tests)
These test cases check the user interface behavior:
- How the output updates while typing slowly
- How the output behaves with fast typing and deletion

**Total: 36 test cases**

---

## Technologies Used

- **Playwright** - For browser automation and testing
- **JavaScript** - Programming language
- **Node.js** - To run the tests
- **Chromium** - Browser for running tests

---

## Getting Started

### What You Need
- Node.js (version 16 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### Installation

1. **Clone this repository**
```bash
git clone https://github.com/kavindu-maduhansa/IT23551466-playwright-automation.git
cd IT23551466-playwright-automation
```

2. **Install the dependencies**
```bash
npm install
```

3. **Install Playwright browsers**
```bash
npx playwright install
```

---

## Running the Tests

### Run all tests
```bash
npm test
```

### Run tests and see the browser
```bash
npm run test:headed
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### View the test report
```bash
npm run test:report
```

---

## Project Structure

```
├── tests/
│   ├── singlishTranslator.spec.js    # All test cases
│   └── getOutputHelper.js            # Helper function
├── playwright.config.js              # Test configuration
├── package.json                      # Dependencies
└── README.md                         # This file
```

---

## How the Tests Work

All tests follow the same pattern:
1. Open the translator website
2. Wait for the page to load
3. Enter Singlish text
4. Get the Sinhala output
5. Check if the output is valid

I used flexible assertions instead of checking exact translations because the translator sometimes adds extra spaces or formatting. This makes the tests more reliable.

---

## Test Results

All 36 tests are passing successfully. The tests run in about 20-25 seconds on average.

---

## What I Learned

Through this project, I learned:
- How to write automated tests using Playwright
- The difference between positive and negative testing
- How to handle dynamic web elements
- How to make tests reliable and maintainable
- How to organize test code properly

---

## Challenges I Faced

1. **Element selectors** - The website doesn't use standard IDs, so I had to use multiple selectors as fallbacks
2. **Timing issues** - Had to add proper waits for the translation to appear
3. **Output variations** - The translator sometimes formats output differently, so I used length checks instead of exact matches

---

## Future Improvements

If I had more time, I would:
- Add more edge case tests
- Test with different browsers (Firefox, Safari)
- Add performance testing
- Test with very long inputs
- Add tests for copy/paste functionality

---

## Repository

GitHub: https://github.com/kavindu-maduhansa/IT23551466-playwright-automation

---

## License

This project was created for educational purposes as part of my university coursework.

---

**Note:** Make sure to run `npm install` and `npx playwright install` before running the tests for the first time.
