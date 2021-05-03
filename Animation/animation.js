function Animation(id, fps, urls) {

    this.imageId = id;                      
    this.fps = 1000 / fps;                  
    this.imgElement = null;                 
    this.frames = new Array(urls.length);   

    this.loadedFrames = 0;                  
    this.isLoaded = false;                  
    this.currentFrame = -1;                 
    this.timer = null;                      
    this.startOnLoad = false;               

    
    for (var i = 0; i < urls.length; i++) {
        this.frames[i] = new Image();
        this.frames[i].onload = countLoaded; 
        this.frames[i].src = urls[i];
    }

    var current = this;

    function countLoaded() {
        current.loadedFrames++;
        if (current.loadedFrames == urls.length) {
            current.isLoaded = true; 
            if (current.startOnLoad) current.start(); 
        }
    }

    
    
    this._nextFrame = function () {
        
        
        current.currentFrame = (current.currentFrame + 1) % current.frames.length;
        current.imgElement.src = current.frames[current.currentFrame].src;
    }
}


Animation.prototype.start = function () {
    if (this.timer) return;

    if (!this.isLoaded) {
        this.startOnLoad = true;
    }
    else {
        if (!this.imgElement) {
            this.imgElement = document.getElementById(this.imageId);
        }
        this._nextFrame();
        this.timer = setInterval(this._nextFrame, this.fps);
    }
}


Animation.prototype.stop = function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
}