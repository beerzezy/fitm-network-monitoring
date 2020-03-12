import HttpRequest from './http_request'

class DeviceProvider extends HttpRequest {
  async fetchDevice (deviceName) {
    const data = this.fetch(`/device/${deviceName}`)
    return data
  }
}

export default new DeviceProvider()
