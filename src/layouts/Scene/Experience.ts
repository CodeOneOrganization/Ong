import CirclePaint from "./CirclePaint";
import Sizes from "./Sizes"

import GSAP from "gsap"


export default class Experience {
  private _sizes!: Sizes
  private static _instance: Experience;
  public context!: CanvasRenderingContext2D
  oldX: number;
  oldY: number;
  private constructor() {
    if (Experience._instance) {
      return Experience._instance
    }

    Experience._instance = this

    this.context = document.querySelector<HTMLCanvasElement>("#scene")?.getContext("2d")!
    this._sizes = new Sizes()

    this.init()
  }

  public init() {
    this.oldX = 0
    this.oldY = 0

    this.draw()
    this.events()
  }

  public update() {

  }

  public handleMouseMove(e: MouseEvent) {
    console.log("mousemove")
    const numOfCircles = Math.max(Math.abs(e.movementX), Math.abs(e.movementY)) / 10
    console.log("numOfCircles", numOfCircles)

    for (let i = 0; i < numOfCircles; i++) {
      const x = GSAP.utils.interpolate(this.oldX, e.clientX, (1 / numOfCircles) * i)
      const y = GSAP.utils.interpolate(this.oldY, e.clientY, (1 / numOfCircles) * i)

      const circle = new CirclePaint(x, y, 10, "#fff")

      circle.draw()
    }

    this.oldX = e.clientX
    this.oldY = e.clientY
  }

  public draw() {
    // this.context.clearRect(0, 0, this._sizes.x, this._sizes.y)

    // this.context.beginPath()
    this.context.fillStyle = "#F8A325"
    this.context.fillRect(0, 0, this._sizes.x, this._sizes.y)
    this.context.globalCompositeOperation = "destination-out"

  }

  public static getScene() {
    if (!Experience._instance) {
      return new Experience()
    }

    return Experience._instance
  }

  public handleResize(){
    this.context.canvas.width = window.innerWidth
    this.context.canvas.height = window.innerHeight

    this.draw()
  }


  public events() {
    window.addEventListener("mousemove", this.handleMouseMove)
    window.addEventListener("resize", this.handleResize)
  }

  public destroy(){
    window.removeEventListener("mousemove", this.handleMouseMove)
    window.removeEventListener("resize", this.handleResize)
    this.context.globalCompositeOperation = "color"
  }


}