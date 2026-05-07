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

  return report.join("\n");
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

  if (args.length > 1) {
    exitWithError("Error: Too many arguments");
  }
  const username = args[0].trim();
  if (username === "") {
    exitWithError("Error: Empty username");
  }

  const user = await fetchGitHubUser(username);
  const userReport = formatUserReport(user);
  console.log(userReport);
}

main().catch(() => {
  exitWithError("Error: GitHub request failed");
});
