import { Api } from './myApi'

export const service = new Api({
  baseUrl: 'https://iit.aminaabdelkafi93.workers.dev',
  baseApiParams: {
    headers: {
      authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhNjg5ZGQyZC0yNWJiLTRlMGItYmQ5OS0zNGEyZmFmYzNiY2QiLCJleHAiOjE3MDIwNjI3MjIsImlhdCI6MTcwMDc2NjcyMiwidHlwZSI6ImFjY2VzcyIsInJvbGVzIjpbInVzZXIiXX0.vpUc-v5DVxGzA-F6FYiejod5rObLy3-MoEG85_PZ2b0'
    }
  }
})
