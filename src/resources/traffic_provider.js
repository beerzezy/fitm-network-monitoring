import HttpRequest from './http_request'

class TrafficProvider extends HttpRequest {
  async fetchTraffic (deviceName, start, end) {
    const data = this.fetch(`/traffic/${deviceName}?startAt=${start}&endAt=${end}`)
    return data
  }
}

export default new TrafficProvider()
