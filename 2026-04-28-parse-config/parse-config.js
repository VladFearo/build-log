const fs = require("fs");

function exitWithError(error) {
  console.error(error);
  process.exit(1);
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

function validateConfig(data) {
  const validEnv = ["development", "test", "production"];
  const isValidEnv = validEnv.includes(data.environment);
  const isValidFeat = isObject(data.features);
  if (
    isNonEmptyString(data.appName) &&
    isNonEmptyString(data.version) &&
    isValidEnv &&
    isValidFeat
  ) {
    return true;
  } else {
    return false;
  }
}

function readJsonFile(filepath) {
  try {
    const fileContent = fs.readFileSync(filepath, "utf8");
    const data = JSON.parse(fileContent);
    return data;
  } catch (err) {
    if (err.code === "ENOENT") {
      exitWithError("Error: file not found");
    } else {
      exitWithError("Error: invalid JSON");
    }
  }
}

function parseDataToString(data) {
  const { appName, version, environment } = data;
  return [
    `App: ${appName}`,
    `Version: ${version}`,
    `Environment: ${environment}`,
  ].join("\n");
}

const args = process.argv.slice(2);

if (args.length === 0) {
  exitWithError("Error: missing config file path");
} else if (args.length > 1) {
  exitWithError("Error: too many arguments");
} else {
  const configPath = args[0];
  const data = readJsonFile(configPath);
  if (data && validateConfig(data)) {
    const parsedData = parseDataToString(data);
    console.log(parsedData);
  } else {
    exitWithError("Error: invalid config");
  }
}
