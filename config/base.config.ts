interface EnvironmentConfig {
  baseUrl: string;
  apiUrl?: string;
  users: {
    valid: {
      username: string;
      password: string;
    };
    invalid: {
      username: string;
      password: string;
    };
  };
}

export const baseConfig: EnvironmentConfig = {
  baseUrl: 'https://practicetestautomation.com',
  users: {
    valid: {
      username: 'student',
      password: 'Password123'
    },
    invalid: {
      username: 'invalidUser',
      password: 'invalidPassword'
    }
  }
};
