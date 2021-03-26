class Enemy{
    constructor(container, src, width, height, x, y, velX, velY){
        //멤버변수 (객체와 생명을 같이 하는 변수)
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;

        this.img.src = this.src;
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
        this.img.style.position = "absolute";
        
        this.container.appendChild(this.img);
    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
        if(this.x <= 0){
            removeObj(this.container, this.img, enemyAr, enemyAr.indexOf(this));
            removeObj(info, hpAr[hpAr.length-1].img, hpAr, hpAr.length-1);
            endGame();
        }

    }

    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
    }
}