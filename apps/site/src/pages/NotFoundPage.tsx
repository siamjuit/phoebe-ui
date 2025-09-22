import { Link } from 'react-router-dom'
import { Button } from '@phoebe-ui/core'

export function NotFoundPage() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
                    <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 0a9 9 0 110-18 9 9 0 010 18z" />
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                    Page Not Found
                </h1>
                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track!
                </p>

                {/* Actions */}
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild>
                            <Link to="/">Go Home</Link>
                        </Button>
                        <Button variant="secondary" asChild>
                            <Link to="/components">Browse Components</Link>
                        </Button>
                    </div>
          
                    <div className="text-sm text-gray-500">
                        Or try searching for what you need:
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h2 className="text-sm font-semibold text-gray-700 mb-4">
                        Popular Pages
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link
                            to="/docs/getting-started"
                            className="text-primary-600 hover:text-primary-700 hover:underline"
                        >
                            Getting Started
                        </Link>
                        <Link
                            to="/docs/installation"
                            className="text-primary-600 hover:text-primary-700 hover:underline"
                        >
                            Installation
                        </Link>
                        <Link
                            to="/components/button"
                            className="text-primary-600 hover:text-primary-700 hover:underline"
                        >
                            Button Component
                        </Link>
                        <Link
                            to="/components/modal"
                            className="text-primary-600 hover:text-primary-700 hover:underline"
                        >
                            Modal Component
                        </Link>
                    </div>
                </div>

                {/* Help Section */}
                <div className="mt-8 text-xs text-gray-500">
                    <p>
                        Still can't find what you're looking for?{' '}
                        <a
                            href="https://github.com/your-org/phoebe-ui/issues"
                            className="text-primary-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Report an issue
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
