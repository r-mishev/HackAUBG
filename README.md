# HackAUBG
## Project Overview
TinyHeart is a cutting-edge healthcare solution that leverages advanced machine learning algorithms to revolutionize fetal health monitoring. Developed using Python, TinyHeart offers a sophisticated platform for IVF clinics and general hospitals to analyze data from fetal health vitals with great accuracy. 

At the heart of TinyHeart is a powerful machine learning model trained on datasets of fetal health parameters. This model meticulously examines input data to categorize cases into three distinct categories: normal, suspicious, or pathological development. By providing real-time insights into fetal health, TinyHeart empowers healthcare professionals to make informed decisions and take timely actions to ensure the well-being of both mother and baby.

## Key Features
### Machine Learning-Powered Analysis
TinyHeart harnesses the capabilities of machine learning to analyze complex datasets of fetal health vitals. This enables precise and reliable categorization of cases, facilitating early detection of potential issues.

### Customized Data Input
IVF clinics and general hospitals can seamlessly input their own patients' data into the TinyHeart platform. This flexibility ensures that healthcare professionals can tailor the analysis to individual cases, enhancing the accuracy and relevance of the results.

### User-friendly Interface
Designed with usability in mind, TinyHeart features an intuitive interface that streamlines the data input process and facilitates easy interpretation of results. Healthcare professionals can navigate the platform effortlessly, maximizing efficiency and productivity.

### Secure and Compliant: Security and data privacy are paramount in healthcare. TinyHeart prioritizes the confidentiality and integrity of patient data, adhering to stringent security standards and regulatory requirements.

## Frontend (React, TypeScript, CSS, Material UI)
React was chosen for TinyHeart's frontend development due to its component-based architecture, which facilitates modular and reusable code. This approach makes it easier to manage complex UIs, enabling us to build and update components independently for improved maintainability.
TypeScript was selected to enhance the frontend codebase by adding static typing to JavaScript. This helps catch errors during development, improves code quality, and provides better tooling support, resulting in more robust and scalable code.
CSS is essential for styling the user interface of TinyHeart. It offers precise control over the visual presentation of components, allowing developers to create a cohesive and aesthetically pleasing design that aligns with the project's requirements and branding guidelines.
Material UI was chosen because it provides a set of pre-designed React components based on Google's Material Design principles. By leveraging Material UI, we quickly managed to build a consistent and intuitive user interface for TinyHeart, reducing development time and ensuring a polished user experience.

## Backend (Python, Flask)
Python's simplicity, readability, and extensive ecosystem of libraries make it an ideal choice for backend development. Its ease of use and versatility allow developers to build robust APIs and web services efficiently, ensuring the scalability and reliability of TinyHeart's backend infrastructure.
Flask was selected as the web framework for TinyHeart's backend due to its lightweight and minimalist design. Flask provides essential features for building RESTful APIs and web applications, allowing developers to focus on implementing the project's functionality without unnecessary complexity or overhead.

## Content Delivery Network (Firebase)
Firebase serves as the Content Delivery Network (CDN) for TinyHeart, offering a suite of services for hosting, real-time database, authentication, and cloud messaging. Its ease of integration, scalability, and reliability make it an excellent choice for managing application content and delivering it efficiently to users, ensuring a seamless user experience.

## Machine Learning (Python)

Python is the primary programming language for machine learning in TinyHeart due to its simplicity, readability, and extensive support for data science libraries and tools. Its versatility and ease of use make it well-suited for implementing machine learning algorithms and analyzing fetal health vitals effectively.
Libraries such as numpy, matplotlib, and pandas are indispensable for data manipulation, analysis, and visualization in Python. They provide essential functionalities for preprocessing data, exploring patterns, and generating insights, enabling healthcare professionals to make informed decisions based on fetal health data.
RandomForestClassifier was chosen as the machine learning algorithm for TinyHeart's predictive modeling tasks due to its simplicity, interpretability, and ability to handle both numerical and categorical features. It effectively analyzes fetal health vitals and predicts developmental outcomes based on input data, empowering healthcare professionals to take appropriate actions to ensure optimal outcomes for mother and baby.

![RandomForestDiagram](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40mrmaster907%2Fintroduction-random-forest-classification-by-example-6983d95c7b91&psig=AOvVaw3m47y8ixwc_cjOfWQfnuJJ&ust=1711957979638000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPimosyCnoUDFQAAAAAdAAAAABAE)

# How to install and run the project?
```
cd client
npm install
npm run dev

cd ./.vnv/bin/activate
poetry run start 
```
# Credits
Radko Mishev, Maria Kirilova, Teodor Kovachev, Anna Kukova
