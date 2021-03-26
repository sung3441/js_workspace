class Plane{

    constructor(container, src, width, height, x, y ,velX, velY){
        //멤버변수 선언 및 초기화
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;


        //멤버변수를 이용한 속성값 지정
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";
        this.img.style.position = "absolute";
        this.img.src = this.src;
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";

        //화면 부착
        this.container.appendChild(this.img);
    }

    tick(){
        this.x += this.velX; //등속도로 계속 누적.
        this.y += this.velY; //등속도로 계속 누적.
        
        if(this.x <= 0){
            this.x = 0;
        }

        for(var i = 0; i < enemyAr.length; i++){
            if(collisionCheck(this.img, enemyAr[i].img)){
                removeObj(info, hpAr[hpAr.length-1].img, hpAr, hpAr.length-1);
                removeObj(this.container, enemyAr[i].img, enemyAr, i);
                endGame();
            }
        }



         /*
        사탕 1 : 무기를 미사일로 전환
        사탕 2 : 다른 무기로 전환
        사탕 3 : hp 추가
        사탕 4 : 속도 up
        사탕 5 : 총알 두 발씩 발사
        */
        for(var i = 0; i < itemAr.length; i++){
            if(collisionCheck(this.img, itemAr[i].img)){
                removeObj(this.container, itemAr[i].img, itemAr, i);
                
                weaponIndex = 2;
            }
        }


        if(this.x >= screen.width-this.width){
            this.x = screen.width - this.width;
        }
    }

    //변경된 값을 화면에 보여주기 위한 그래픽 처리
    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
    }
}