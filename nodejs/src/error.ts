class HackMDError extends Error {
  constructor (message: string) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}


class HttpResponseError extends HackMDError {
  public constructor (
    message: string,
    readonly code: number,
    readonly statusText: string,
  ) {
    super(message)
  }
}

class MissingRequiredArgument extends HackMDError {}
class InternalServerError extends HttpResponseError {}


export {
  HackMDError,
  HttpResponseError,
  MissingRequiredArgument,
  InternalServerError
}
