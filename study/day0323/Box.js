class Box{
    constructor(x, y){
        this.x = x;
        this.y= y;
        this.img = document.createElement("img");
        this.img.src = "../../image/block.png";
        this.img.style.top = this.y+"px";
        this.img.style.left = this.x+"px";
        this.img.style.width = 50+"px";
        this.img.style.height = 50+"px";
        this.img.style.position = "absolute";

        wrapper.appendChild(this.img);
    }



}