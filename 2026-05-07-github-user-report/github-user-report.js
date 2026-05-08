async function fetchGitHubUser(username) {
  const API = `https://api.github.com/users/${encodeURIComponent(username)}`;
  const response = await fetch(API);
  if (response.status === 404) {
    exitWithError("Error: GitHub user not found");
  }
  if (!response.ok) {
    exitWithError("Error: GitHub request failed");
  }
  try {
    return await response.json();
  } catch {
    exitWithError("Error: Invalid response from GitHub");
  }
}

async function fetchGitHubRepos(username) {
  const API = `https://api.github.com/users/${encodeURIComponent(username)}/repos`;
  const response = await fetch(API);
  if (!response.ok) {
    exitWithError("Error: GitHub request failed");
  }
  try {
    return await response.json();
  } catch {
    exitWithError("Error: Invalid response from GitHub");
  }
}

function formatUserReport(user) {
  let { login, name, public_repos, followers, following, html_url } = user;
  name = name ?? "N/A";
  const report = ["GitHub User Report", "------------------"];
  report.push(`Username: ${login}`);
  report.push(`Name: ${name}`);
  report.push(`Public repos: ${public_repos}`);
  report.push(`Followers: ${followers}`);
  report.push(`Following: ${following}`);
  report.push(`Profile: ${html_url}`);

  return report;
}

function exitWithError(message) {
  console.error(message);
  process.exit(1);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    exitWithError("Error: Missing GitHub username");
  }

  if (args.length > 2) {
    exitWithError("Error: Too many arguments");
  }
  if (args.length === 2 && args[1] !== "--repos") {
    exitWithError("Error: Unknown option");
  }
  const username = args[0].trim();

  if (username === "") {
    exitWithError("Error: Empty username");
  }

  const user = await fetchGitHubUser(username);
  const report = formatUserReport(user);

  const includeRepos = args.includes("--repos");

  if (includeRepos) {
    const repos = await fetchGitHubRepos(username);

    if (repos.length === 0) {
      report.push("");
      report.push("No public repositories found.");
    } else {
      const topRepos = [...repos]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);

      report.push("");
      report.push("Top repositories by stars:");

      for (const repo of topRepos) {
        const language = repo.language ?? "Unknown";
        report.push(
          `- ${repo.name} | ⭐ ${repo.stargazers_count} | ${language} | ${repo.html_url}`,
        );
      }
    }
  }
  console.log(report.join("\n"));
}

main().catch(() => {
  exitWithError("Error: GitHub request failed");
});
