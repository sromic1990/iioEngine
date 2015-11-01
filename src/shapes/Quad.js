/* Quad
------------------
*/

// DEFINITION
iio.Quad = function(){ this.Quad.apply(this, arguments) };
iio.inherit(iio.Quad, iio.Shape);
iio.Quad.prototype._super = iio.Shape.prototype;

// CONSTRUCTOR
iio.Quad.prototype.Quad = function() {
  this._super.Shape.call(this,iio.merge_args(arguments));
  this.height = this.height || this.width;
}

// SHARED RECTANGLE FUNCTIONS
iio.Quad.prototype.draw_shape = iio.Rectangle.prototype.draw_shape;
iio.Quad.prototype.draw_rounded = iio.Rectangle.prototype.draw_rounded;
iio.Quad.prototype.contains = iio.Rectangle.prototype.contains
iio.Quad.prototype.size = iio.Rectangle.prototype.size;
iio.Quad.prototype.setSize = iio.Rectangle.prototype.setSize;
iio.Quad.prototype._trueVs = iio.Polygon.prototype.trueVs;

// OVERRIDE FUNCTIONS
iio.Quad.prototype.left = function(){ return this.pos.x - this.width/2 }
iio.Quad.prototype.right = function(){ return this.pos.x + this.width/2 }
iio.Quad.prototype.top = function(){ return this.pos.y - this.height/2 }
iio.Quad.prototype.bottom = function(){ return this.pos.y + this.height/2 }

// IMPLEMENT ABSTRACT FUNCTIONS
iio.Quad.prototype.trueVs = function() {
  this.vs = [
    new iio.Vector(-this.width/2, -this.height/2),
    new iio.Vector(this.width/2, -this.height/2),
    new iio.Vector(this.width/2, this.height/2),
    new iio.Vector(-this.width/2, this.height/2),
  ];
  if (!this.rotateVs) {
    var vs = [];
    for(var v,i=0;i<this.vs.length;i++){
      v = this.vs[i].clone();
      v.x += this.pos.x;
      v.y += this.pos.y;
      vs[i]=v;
    }
    return vs;
  }
  return this._trueVs()
}
