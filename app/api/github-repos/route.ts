
import { cacheLife } from "next/cache";

type GitHubRepository = {
  name: string;
  language: string | null;
  description: string | null;
  topics: string[];
  html_url: string;
  fork: boolean;
};

export async function GET() {
  try {
    return Response.json(await getGitHubProjects());
  } catch (error) {
    console.error("Failed to fetch GitHub repositories:", error);
    return Response.json(
      { error: "GitHub connection failed" },
      { status: 502 }
    );
  }
}

async function getGitHubProjects() {
  "use cache";
  cacheLife({ stale: 60, revalidate: 300, expire: 3600 });

  const response = await fetch(
    "https://api.github.com/users/alikhan206581/repos?type=public&sort=updated&per_page=100",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }

  const repositories: GitHubRepository[] = await response.json();

  return repositories.map((repo, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: repo.name,
    category: repo.language ? repo.language.toUpperCase() : "GITHUB PROJECT",
    description:
      repo.description || "Public repository by Muhammad Ali Imran.",
    tech: [...(repo.language ? [repo.language] : []), ...repo.topics],
    github: repo.html_url,
    status: repo.fork ? "PUBLIC FORK" : "PUBLIC REPOSITORY",
    symbol: "⌘",
  }));
}
