import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface ContributorInfo{
    name: string
    githubUsername?: string
    avatarUrl ?: string
}

interface DemoCanvasProps {
    children: ReactNode
    contributor?: ContributorInfo
    className ?: string
}

export function DemoCanvas({
    children,
    contributor,
    className
}: DemoCanvasProps) {
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(part => part.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    const profileUrl = contributor?.githubUsername
        ? `https://github.com/${contributor.githubUsername}`
        : undefined
    
    return (
    <div className={cn('relative p-8 bg-gray-50 rounded-lg border', className)}>
      {children}
      
      {contributor && (
        <div className="absolute bottom-2 left-2">
          {profileUrl ? (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 py-1 text-xs bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              aria-label={`Component by ${contributor.name} (${contributor.githubUsername})`}
            >
              {contributor.avatarUrl ? (
                <img
                  src={contributor.avatarUrl}
                  alt=""
                  className="w-4 h-4 rounded-full"
                />
              ) : (
                <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-[8px] font-medium text-gray-600">
                  {getInitials(contributor.name)}
                </div>
              )}
              <span className="text-gray-600">@{contributor.githubUsername}</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-2 py-1 text-xs bg-white border border-gray-200 rounded-full shadow-sm">
              <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-[8px] font-medium text-gray-600">
                {getInitials(contributor.name)}
              </div>
              <span className="text-gray-600">{contributor.name}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
