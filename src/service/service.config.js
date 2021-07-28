const RUN_ENV = 'development'

const initialConfig = {
  environment: {
    development: ' https://jsonplaceholder.typicode.com',
    sandbox: ' https://jsonplaceholder.typicode.com'
  }
}

export default envConfig = initialConfig.environment[RUN_ENV]
