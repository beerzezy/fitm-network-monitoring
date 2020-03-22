import HttpRequest from './http_request'

class NetworkProvider extends HttpRequest {
  async fetchNetwork () {
    const data = this.fetch('/interface/diagram')
    return data
  }
}

export default new NetworkProvider()
