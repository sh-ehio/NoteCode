<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Code Snippet Sharing Application - README</title>
</head>

<body>
    <h1>Code Snippet Sharing Application - README</h1>

    <h2>Introduction</h2>
    <p>This project is a <strong>code snippet sharing application</strong> built with React, utilizing the <strong>Monaco Editor</strong> to allow users to write, edit, and share code snippets easily. Users can select different programming languages, modify code snippets, and share them with others through automatically generated links.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Monaco Editor Integration</strong>: A powerful, customizable code editor that supports multiple languages, such as JavaScript, HTML, TypeScript, CSS, and JSON.</li>
        <li><strong>Snippet Sharing</strong>: Users can create and share their code snippets through unique URLs. Snippets can be shared with others via links.</li>
        <li><strong>Language Selection</strong>: Allows users to switch between supported programming languages while editing snippets.</li>
        <li><strong>Real-Time Editor Updates</strong>: Any changes made in the editor are tracked, and users are only allowed to share if the snippet has been modified.</li>
        <li><strong>Button Disable/Enable</strong>: The "Share" button is enabled only when changes are made to the snippet, ensuring that unchanged snippets cannot be shared.</li>
        <li><strong>Responsive Design</strong>: The layout is responsive, providing an optimal experience on various screen sizes.</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-repo/code-snippet-sharing.git
cd code-snippet-sharing
            </code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install
            </code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm start
            </code></pre>
        </li>
    </ol>
    <p>The application will be accessible at <code>http://localhost:3000</code>.</p>

    <h2>Usage</h2>
    <ol>
        <li><strong>Code Editing</strong>: Upon loading the app, you will see a default code snippet in the Monaco Editor. You can modify this code or start fresh by selecting a programming language from the dropdown menu.</li>
        <li><strong>Sharing Code Snippets</strong>:
            <ul>
                <li>After modifying the snippet, click the <strong>"Share"</strong> button. If the snippet hasn't been changed, the button will be disabled.</li>
                <li>The snippet will be saved, and a shareable link will be generated. You can copy this link and share it with others.</li>
                <li>If you have received a shared snippet link, opening it will load the code snippet directly into the editor.</li>
            </ul>
        </li>
        <li><strong>Language Support</strong>: Switch between different programming languages, such as JavaScript, HTML, CSS, and JSON, using the language dropdown menu.</li>
    </ol>

    <h2>API Integration</h2>
    <p>The application uses a simple API for fetching and creating snippets:</p>
    <ul>
        <li><strong>GET</strong> request to retrieve a saved snippet using its <code>id</code>.</li>
        <li><strong>POST</strong> request to create a new snippet and generate a shareable link.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
        <li><strong>Monaco Editor</strong>: The code editor that powers VS Code, integrated into the app for an intuitive coding experience.</li>
        <li><strong>Axios</strong>: A promise-based HTTP client for interacting with the backend API.</li>
        <li><strong>React Router</strong>: Enables dynamic routing within the application.</li>
        <li><strong>CSS Modules</strong>: For styling the application and maintaining scoped CSS.</li>
    </ul>

    <h2>Folder Structure</h2>
    <pre><code>src/
│
├── assets/          # Contains icons and images
├── components/      # React components like EditorMonaco
├── styles/          # CSS modules for styling
├── App.tsx          # Main app component
├── index.tsx        # Application entry point
└── ...
    </code></pre>

    <h2>Contributing</h2>
    <ol>
        <li>Fork the repository.</li>
        <li>Create your feature branch (<code>git checkout -b feature/new-feature</code>).</li>
        <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
        <li>Push to the branch (<code>git push origin feature/new-feature</code>).</li>
        <li>Open a pull request.</li>
    </ol>

    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>

    <hr>
    <p>Thank you for using the code snippet sharing application! We hope this tool helps in sharing and collaborating on code more effectively.</p>
</body>

</html>
