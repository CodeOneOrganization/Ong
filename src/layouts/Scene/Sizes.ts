

export default class Sizes {
  x: number
  y: number
  constructor(){
    this.x = window.innerWidth
    this.y = window.innerHeight

    this.init()
  }

  public init(){
    window.addEventListener("resize", () => {
      this.x = window.innerWidth
      this.y = window.innerHeight
    })
  }


}