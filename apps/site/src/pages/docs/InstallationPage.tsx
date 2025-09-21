export function InstallationPage() {
    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Installation</h1>
                <p className="mt-2 text-lg text-gray-600">
                    Detailed installation instructions for different environments.
                </p>
            </div>

            {/* Package Manager Installation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Package Manager</h2>
        
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium mb-2">npm</h3>
                        <div className="bg-gray-900 rounded-lg p-4">
                            <code className="text-green-400 text-sm">
                                npm install @phoebe-ui/core
                            </code>
                        </div>
                    </div>
          
                    <div>
                        <h3 className="text-lg font-medium mb-2">yarn</h3>
                        <div className="bg-gray-900 rounded-lg p-4">
                            <code className="text-green-400 text-sm">
                                yarn add @phoebe-ui/core
                            </code>
                        </div>
                    </div>
          
                    <div>
                        <h3 className="text-lg font-medium mb-2">pnpm</h3>
                        <div className="bg-gray-900 rounded-lg p-4">
                            <code className="text-green-400 text-sm">
                                pnpm add @phoebe-ui/core
                            </code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Setup */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Framework Setup</h2>
        
                <div className="space-y-8">
                    {/* Next.js */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Next.js</h3>
                        <p className="text-gray-600 mb-4">
                            For Next.js 13+ with app directory:
                        </p>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{`// app/layout.tsx
import { TooltipProvider } from '@phoebe-ui/core'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}`}</code>
                        </pre>
                    </div>

                    {/* Vite */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Vite</h3>
                        <p className="text-gray-600 mb-4">
                            For Vite React projects:
                        </p>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{`// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { TooltipProvider } from '@phoebe-ui/core'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </React.StrictMode>,
)`}</code>
                        </pre>
                    </div>

                    {/* Remix */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Remix</h3>
                        <p className="text-gray-600 mb-4">
                            For Remix applications:
                        </p>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{`// app/root.tsx
import { TooltipProvider } from '@phoebe-ui/core'

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <TooltipProvider>
          <Outlet />
        </TooltipProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Styling */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Styling Setup</h2>
        
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium mb-3">Tailwind CSS (Recommended)</h3>
                        <p className="text-gray-600 mb-4">
                            Install Tailwind CSS and configure it to scan Phoebe UI components:
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 mb-4">
                            <code className="text-green-400 text-sm">
                                npm install -D tailwindcss postcss autoprefixer
                            </code>
                        </div>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{`// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@phoebe-ui/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}`}</code>
                        </pre>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">CSS Import</h3>
                        <p className="text-gray-600 mb-4">
                            Add Tailwind directives to your CSS file:
                        </p>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{`/* globals.css or index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Development */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Development Setup</h2>
        
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium mb-3">TypeScript</h3>
                        <p className="text-gray-600 mb-4">
                            Phoebe UI is built with TypeScript and includes full type definitions.
                        </p>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{`// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "bundler"
  }
}`}</code>
                        </pre>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">ESLint Configuration</h3>
                        <p className="text-gray-600 mb-4">
                            Recommended ESLint setup for accessibility:
                        </p>
                        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                            <code>{`// .eslintrc.js
module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['jsx-a11y'],
}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
        
                <div className="space-y-6">
                    <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50">
                        <h4 className="font-medium text-yellow-800 mb-2">
                            Components not styled properly
                        </h4>
                        <p className="text-yellow-700 text-sm">
                            Make sure Tailwind CSS is configured to scan <code>@phoebe-ui/core</code> files in your content paths.
                        </p>
                    </div>
          
                    <div className="p-4 border-l-4 border-red-400 bg-red-50">
                        <h4 className="font-medium text-red-800 mb-2">
                            Tooltips not working
                        </h4>
                        <p className="text-red-700 text-sm">
                            Ensure your app is wrapped with <code>TooltipProvider</code> from <code>@phoebe-ui/core</code>.
                        </p>
                    </div>
          
                    <div className="p-4 border-l-4 border-blue-400 bg-blue-50">
                        <h4 className="font-medium text-blue-800 mb-2">
                            TypeScript errors
                        </h4>
                        <p className="text-blue-700 text-sm">
                            Make sure you're using TypeScript 5.0+ and have <code>"moduleResolution": "bundler"</code> in your tsconfig.json.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
