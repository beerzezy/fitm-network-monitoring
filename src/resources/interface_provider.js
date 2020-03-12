import HttpRequest from './http_request'

class InterfaceProvider extends HttpRequest {
  async fetchInterface (deviceName) {
    const data = this.fetch(`/interface/${deviceName}`)
    return data
  }
}

export default new InterfaceProvider()
