import HttpRequest from './http_request'

class TrafficProvider extends HttpRequest {
  async fetchTrafficPick (deviceName, start, end) {
    const data = this.fetch(`/traffic/${deviceName}?startAt=${start}&endAt=${end}`)
    return data
  }

  async fetchTraffic (deviceName) {
    const data = this.fetch(`/traffic/home/${deviceName}`)
    return data
  }

  async fetchTrafficType (deviceName, type) {
    const data = this.fetch(`/traffic/${deviceName}/${type}`)
    return data
  }
}

export default new TrafficProvider()
