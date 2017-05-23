// GCanvasImage
  function GCanvasImage() {
    /**
     * The width of the image after it is loaded.
     *
     * @type {number}
     */
    this.width = 0;

    /**
     * The height of the image after it is loaded.
     *
     * @type {number}
     */
    this.height = 0;

    /**
     * A unique id assigned to each image upon creation.
     *
     * @type {number}
     */
    this.id = (++GCanvasImage.idCounter);

    this._id = this.id; // public facing "id" but _id used to internally
    // track image
    this._src = ""; // image source path
    this._complete = true; // "is loading" identifier for complete property
  }

  /**
   * Iterator for generating id values for GCanvasImage instances
   * internally.
   *
   * @private
   */
  GCanvasImage.idCounter = 0;

  /**
   * Callback for when an image has successfully loaded a file path assigned
   * to {@link GCanvasImage#src}.
   *
   * @type {function}
   * @name GCanvasImage#onload
   */

  /**
   * Callback for when an image has failed to load a file path assigned to
   * {@link GCanvasImage#src}.
   *
   * @type {function}
   * @name GCanvasImage#onerror
   */
  GCanvasImage.prototype.removeEventListener = function(type, callback, force) {
  };

  GCanvasImage.prototype.addEventListener = function(type, listener, force) {
    if (type === "load" && typeof listener === 'function') {
      this.onload = listener;
    }

    if (type === "error" && typeof listener === 'function') {
      this.onerror = listener;
    }
  };

  /**
   * The source property, identifying a URL path to the image's file location.
   * Upon setting this value to a file path value, the file is loaded into the
   * GCanvas plugin. For GCanvas images can be unloaded by setting the
   * src to null or "".
   *
   * @type {string}
   * @name GCanvasImage#src
   * @example var myImage = GCanvas.createImage(); myImage.onload =
   *          function(){ // ... myContext.drawImage(myImage, 0,0,100,100,
 *          0,0,100,100); GCanvas.render(); } myImage.onerror =
   *          function(){ console.log("Could not load image!"); } myImage.src =
   *          "images/spritesheet.jpg";
   */

  Object.defineProperty(GCanvasImage.prototype, "src", {
    get: function() {
      return this._src;
    },
    set: function(value) {
      this._src = value;

      // var gcanvas = GCanvas._instance;
      // context = gcanvas.getContext("2d");

      var context = GCanvas._instance_context;

      // Unloading
      if (!this._src) {
        context.unloadTexture(this);
        return;
      }

      // Loading
      this.complete = false;

      // callback wrappers
      var me = this;

      function onerror(err) {

        me.complete = true;
        if (typeof me.onerror === 'function') {
          me.onerror(err);
        }
      }

      function onload(metrics) {

        me.complete = true;

        if (metrics[0] && metrics[1]) {
          me.width = Math.floor(metrics[0]);
          me.height = Math.floor(metrics[1]);
        }

        if (typeof me.onload === 'function') {
          me.onload();
        }
      }

      context.loadTexture(this, onload, onerror);
    }
  });

  /**
   * False when the image is in the process of loading an image after the src
   * property has been set. True when loading is complete or if src is never
   * set. If an error occurred when attempting to load the image, once the
   * process of loading is complete, despite the error, this value will still
   * become true.
   *
   * @type {boolean}
   * @name GCanvasImage#complete
   */
  Object.defineProperty(GCanvasImage.prototype, "complete", {
    get: function() {
      return this._complete;
    },
    set: function(value) {
      this._complete = value;
    }
  });


  module.exports=GCanvasImage;
