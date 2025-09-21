import simpleGit from "simple-git";

export interface ContributorInfo {
    name: string
    githubUsername?: string
    avatarUrl?: string
}

export async function getContributorInfo(usernameFlag?: string): Promise<ContributorInfo> {
    const git = simpleGit()

    try {
        
        const config = await git.raw(['config', '--global', '--list'])
        // const userEmail = config.match(/user\.email=(.+)/)?.[1] //For future reference
        const userName = config.match(/user\.name=(.+)/)?.[1] || 'Unknown'

        let githubUsername = usernameFlag

        if (!githubUsername) {
            try {
                const remotes = await git.getRemotes(true)
                const origin = remotes.find(r => r.name === 'origin')
                if (origin?.refs.fetch?.includes('github.com')) {
                    const match = origin.refs.fetch.match(/github\.com[/:]([^/]+)/)
                    githubUsername = match?.[1]
                }
            } catch (error) {
                //Ignore errors
            }
        }

        const result: ContributorInfo = { name: userName }
        
        if (githubUsername) {
            result.githubUsername = githubUsername
            result.avatarUrl = `https://github.com/${githubUsername}.png?size=32`
        }

        return result
    } catch (error) {
        return {name: 'Unknown'}
    }
}