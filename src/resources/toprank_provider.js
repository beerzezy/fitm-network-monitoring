import HttpRequest from './http_request'

class TopRankProvider extends HttpRequest {
  async fetchTopRankInbound () {
    const data = this.fetch('/interface/inbound')
    return data
  }

  async fetchTopRankOutbound () {
    const data = this.fetch('/interface/outbound')
    return data
  }
}

export default new TopRankProvider()
