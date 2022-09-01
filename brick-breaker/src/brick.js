export default class Brick {
  constructor(game, position) {
    this.img = document.getElementById("imgBrick");

    this.game = game;

    this.position = position;
    this.width = 52;
    this.height = 24;
  }

  update() {}

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
