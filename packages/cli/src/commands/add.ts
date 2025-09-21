import { Command } from "commander";
import chalk from 'chalk'
import ora from 'ora'
import path from 'path'
import fs from 'fs-extra'
import { getContributorInfo } from "../utils/git";

export const addCommand = new Command('add')
    .description('Add a new Component')
    .argument('<name>', 'component name')
    .option('-c, --contributor <username>', 'Github Username for contributor badge')
    .option('-p, --path <path>', 'output path', './src/components')
    .action(async (componentName: string, options) => {
        const spinner = ora('Creating component...').start()
        
        try {
            const contributor = await getContributorInfo(options.contributor)

            const files = generateComponentFiles(componentName, contributor)

            const componentDir = path.join(process.cwd(), options.path, componentName)
            await fs.ensureDir(componentDir)

            for (const [filename, content] of Object.entries(files)) {
                const filePath = path.join(componentDir, filename)
                await fs.writeFile(filePath, content)
            }

            spinner.succeed(chalk.green(`✅ Created ${componentName} component`))
            console.log(chalk.blue('\n📁 Files created:'))
            Object.keys(files).forEach(file => {
            console.log(chalk.gray(`   ${path.join(options.path, componentName, file)}`))
            })

            if (contributor.githubUsername) {
                console.log(chalk.cyan(`\n👤 Contributor: @${contributor.githubUsername}`))
            }
        } catch (error) {
            spinner.fail(chalk.red(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`))
            process.exit(1)
        }
    })

function generateComponentFiles(name: string, contributor: any) {
  const pascalName = name.charAt(0).toUpperCase() + name.slice(1)
  
  return {
    [`${pascalName}.tsx`]: `import React from 'react'
    import { cn } from '../../utils/cn'

export interface ${pascalName}Props extends React.HTMLAttributes<HTMLDivElement> {
  // Add your props here
}

export function ${pascalName}({ className, children, ...props }: ${pascalName}Props) {
  return (
    <div
      className={cn(
        'p-4 border rounded-lg',
        className
      )}
      {...props}
    >
      {children || '${pascalName} component'}
    </div>
  )
}
`,
    [`${pascalName}.test.tsx`]: `import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ${pascalName} } from './${pascalName}'

describe('${pascalName}', () => {
  it('renders correctly', () => {
    render(<${pascalName}>Test content</${pascalName}>)
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})
`,
    'index.ts': `export { ${pascalName} } from './${pascalName}'\nexport type { ${pascalName}Props } from './${pascalName}'`,
    'README.md': `# ${pascalName}

A ${pascalName.toLowerCase()} component built with Phoebe UI.

## Usage

\`\`\`tsx
import { ${pascalName} } from '@phoebe-ui/core'

function App() {
  return <${pascalName}>Content</${pascalName}>
}
\`\`\`

${contributor.githubUsername ? `## Contributor

Created by [@${contributor.githubUsername}](https://github.com/${contributor.githubUsername})` : ''}
`
  }
}