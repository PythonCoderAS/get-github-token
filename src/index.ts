import "dotenv/config";

/**
 * Gets a token from the environment or a command line argument.
 * @param tokenInput The value of the command line argument, if any.
 * @param environmentVariableName The name of the environment variable to check.
 * @returns The token.
 */
export default function getToken(tokenInput?: string | null, environmentVariableName = "GITHUB_TOKEN"): string | null {
  if (tokenInput) {
    return tokenInput;
  }

  if (process.env[environmentVariableName]) {
    return process.env[environmentVariableName] || null;
  }

  return null;
}
