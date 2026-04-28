const fs = require("fs");

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

function validateRequiredFields(data) {
  if (isNonEmptyString(data.appName) && isNonEmptyString(data.version)) {
    return true;
  } else {
    console.error("Error: invalid config");
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
      console.error("Error: file not found");
    } else {
      console.error("Error: invalid JSON");
    }

    return null;
  }
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Error: missing config file path");
} else if (args.length > 1) {
  console.error("Error: too many arguments");
} else {
  const configPath = args[0];
  const data = readJsonFile(configPath);
  if (data && validateRequiredFields(data)) {
    console.log(data);
  }
}
