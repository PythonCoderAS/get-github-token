# @pythoncoderas/get-github-token

Get a github token from multiple locations.

## API

### `getToken(tokenInput?: string | null, environmentVariableName = "GITHUB_TOKEN"): string | null`

Gets a token from the environment or a command line argument.

**Parameters**

- `tokenInput?: string | null` - The token input from the command line.
- `environmentVariableName: string` - The environment variable name to check for a token. Defaults to `GITHUB_TOKEN`.

**Returns**: `string | null` - The token if found, otherwise returns `null`.
