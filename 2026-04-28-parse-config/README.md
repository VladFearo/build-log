````md
# Parse Config

Small Node.js CLI tool that reads a JSON config file, validates it, and prints a readable summary.

## Usage

```bash
node parse-config.js config.json
```
````

## Example Config

```json
{
  "appName": "Build Log",
  "version": "1.0.0",
  "environment": "development",
  "features": {
    "logging": true,
    "analytics": false,
    "darkMode": true
  }
}
```

## Example Output

```txt
App: Build Log
Version: 1.0.0
Environment: development

Enabled features:
- logging
- darkMode

Disabled features:
- analytics
```

## Validation Rules

The config must include:

- `appName`: non-empty string
- `version`: non-empty string
- `environment`: one of `development`, `test`, or `production`
- `features`: object with boolean values

## Errors

The script handles:

- missing config file path
- too many arguments
- file not found
- invalid JSON
- invalid config shape
