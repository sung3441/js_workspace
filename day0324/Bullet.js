class Bullet{

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
        if(this.x >= screen.width){
            removeObj(this.container, this.img, bulletAr, bulletAr.indexOf(this))
        }
        for(var i =0; i < enemyAr.length; i++){
            if(collisionCheck(this.img, enemyAr[i].img)){    
                //이런 등시새끼 인덱스 올 자리에 인덱스가 아니라 요소를 넘겨줬었네
                //진짜 답없다 ;; 잊지말자 매개변수;;;;
                removeObj(this.container, this.img, bulletAr, bulletAr.indexOf(this));
                removeObj(this.container, enemyAr[i].img, enemyAr, i);
                score += 10;
            }
        }   
    }
    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
    }
}