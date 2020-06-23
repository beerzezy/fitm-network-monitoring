import HttpRequest from './http_request'

class TrafficProvider extends HttpRequest {
  async fetchTraffic (deviceName, start, end) {
    const data = this.fetch(`/traffic/${deviceName}?startAt=${start}&endAt=${end}`)
    return data
  }

  async fetchTrafficType (deviceName, type) {
    const data = this.fetch(`/traffic/${deviceName}/${type}`)
    return data
  }
}

export default new TrafficProvider()
