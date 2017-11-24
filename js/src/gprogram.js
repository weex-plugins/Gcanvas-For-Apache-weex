function GProgram() {
  this.programId = 0;
  this.vertex = "";
  this.fragment = "";
}
GProgram.prototype.attachShader = function(type, shader) {
  if(type === 'vertex'){
    this.vertex = shader;
  }else if(type === 'fragment'){
    this.fragment = shader;
  }
};

module.exports = GProgram;
