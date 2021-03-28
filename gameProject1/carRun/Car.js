class Car{
    constructor(wrapper, src, width, height, velX, velY){
        //생성자에서 받아온 매개변수들 정의
        this.wrapper = wrapper;
        this.src = src;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.x = 0;
        this.y = 100;

        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";
        this.img.style.position = "absolute";
        this.img.style.left = 0+"px";
        this.img.style.top = 100+"px";
        

        this.wrapper.appendChild(this.img);


        
    }

    tick(){
        this.img.src = this.src;
        this.x += this.velX;
        this.y += this.velY;
        if(collisionCheck(this.img, police.img)){
            //alert("최종 점수는 : "+score);
            //clearInterval(si);
        }
    }

    render(){
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";

    }


}