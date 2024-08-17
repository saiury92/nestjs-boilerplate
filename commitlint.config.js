module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'improve', // Code improvement
        'refactor', // Code refactoring
        'docs', // Add documentation
        'chore', // Small development changes
        'style', // Fixing code style issues, formatting, no logic changes
        'test', // Writing tests
        'revert', // Revert a previous commit
        'ci', // CI/CD configuration changes
        'build', // Build files
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [0, 'never'], // Disable type-empty check
    'scope-empty': [0, 'never'], // Disable scope-empty check
    'subject-empty': [0, 'never'], // Disable subject-empty check
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
};
