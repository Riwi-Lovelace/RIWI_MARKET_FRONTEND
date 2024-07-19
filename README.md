# Riwi Market

## Description:

Riwi Market is a comprehensive solution for store and supermarket management. Our web application focuses on product billing, batch management, invoices, and customers. Additionally, we offer the possibility to create an online store where customers can register, make purchases, and receive home deliveries.

We stand out for providing an intuitive and pleasant interface, making it easy for anyone to use. 

Our platform generates detailed reports and sales statistics, allowing efficient and optimized business management.

This repository hosts the Front-End of our innovative Riwi Market application, designed to revolutionize store and supermarket management. Here you will find all the code related to the visual interface and integration with our powerful API developed in Java SpringBoot. To explore the backend of our application in detail, visit our repository on GitHub here.→ [https://github.com/Riwi-Lovelace/RIWI_MARKET_BACKEND/tree/develop](https://github.com/Riwi-Lovelace/RIWI_MARKET_BACKEND/tree/develop)

The interface was made using React JS and Tailwindcss.

## Prerequisites for use:

- **Node:** to download the necessary dependencies.
- **App backend:** the API must be running so that the data can be loaded, you can find the steps to run it in the backend repository.

## Table of Contents

- Installation
- Usage
- Contribution

# Installation

1. **Clone the repository:**
    
    so that the application works for you without problems, you should not change the branch (default: Main)
    

```
git clone https://github.com/Riwi-Lovelace/RIWI_MARKET_FRONTEND.git
cd RIWI_MARKET_FRONTEND
```

1. **Install dependencies:**
    
    check that the dependencies install correctly without errors
    
    ```
    // react install
    npm install react-router-dom
    
    //  tailwind install
    npm install -D tailwindcss
    npx tailwindcss init
    ```
    

# Usage

1. **Start Application:**
- In the terminal of the RIWI_MARKET_FRONTEND folder, use the following command:

```
npm run dev
```

- you must click the link that appears by pressing ctrl + click
- a tab will open in your default browser

# Contribution

things to keep in mind as you work on your assigned tasks for this project

1. Use or create branch for new features:
    
    **Branch:**
    
    in case your leader has not created the specific branch for your assigned task in Click-UP you can create it and then upload the branch remotely with the new changes made
    
    ```
    git checkout -b feature/000-000-new-feature
    ```
    
    the numbers in 000 must be according to the epic and order of the tasks
    
    **Commits:**
    
    after making the respective changes you must commit with a clear name (it is recommended to make commits for each function and/or component).
    
    ```
    git commit -m “Method(ej: Fix, Feat, etc.): clear description of the changes”
    ```
    
    **Push:**
    
    after committing, remember to upload that local change to remote and then do the Pull Request
    
    ```
    git push origin feature/000-000-new-feature
    ```
    
2. **Pull Request to develop:**
    
    it is very important after making the general changes and it is finished you must make a Pull Request to develop for your leader to review the changes and then upload it to release and then to main, so that your changes are functional in the application.
    
    **Warning!** Always check the origin of the branch and the destination in the Pull Request, please provide an accurate description of the changes, and do not do it if the component is not 100% functional (check for errors before submitting).
    
3. **Coding and style standards:**
    
    **Gitflow:**
    Remember that we are working under the gitflow workflow so the main branch is the main, then release which is for testing, develop where developers upload their work through Pull Request, and finally the feature which is each assigned task where developers are allowed to work freely.
    
    **Comments:**
    
    provide as many comments as possible, especially in functions with complex logic and that are difficult to understand.
    
    Comments should be in English.