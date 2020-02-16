import HttpRequest from './http_request'

class InterfaceProvider extends HttpRequest {
  // async createCoupon (payload) {
  //   const data = this.create(`/coupons`, payload)
  //   return data
  // }

  async fetchInterface (deviceName) {
    const data = this.fetch(`/interface/${deviceName}`)
    return data
  }

  // async deleteCoupon (param) {
  //   const data = this.delete(`/coupons/${param}`)
  //   return data
  // }

  // async updateCoupon (param, payload) {
  //   const data = this.update(`/coupons/${param}`, payload)
  //   return data
  // }
}

export default new InterfaceProvider()
