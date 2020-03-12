import HttpRequest from './http_request'

class SpeedProvider extends HttpRequest {
  async fetchSpeed () {
    const data = this.fetch('/speed')
    return data
  }
}

export default new SpeedProvider()
