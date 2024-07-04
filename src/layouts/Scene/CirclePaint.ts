import Experience from "./Experience";

export default class CirclePaint {
  constructor(
    private x: number,
    private y: number,
    private radius: number,
    private color: string,
    private _experience = Experience.getScene(),
    private _context = _experience.context,
  ){ }

  public draw(){
    this._context.beginPath()
    // this._context.fillStyle = this.color
    this._context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    this._context.fill()
  }
}