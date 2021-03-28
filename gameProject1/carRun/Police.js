class Police{
    constructor(wrapper, src, width, height, velX, velY){
        //생성자에서 받아온 매개변수들 정의
        this.wrapper = wrapper;
        this.src = src;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.x = 500;
        this.y = 500;
        this.targetX = 500;
        this.targetY = 500;

        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
        

        this.wrapper.appendChild(this.img);


        
    }

    moveX(){
        if(car.x > this.x){
            this.img.src = "../image/policecarRight.png";
            this.x = this.x + 0.05*(car.x - this.x);
            this.img.style.left = this.x+"px";
        }else{
            this.img.src = "../image/policecarLeft.png";
            this.x = this.x + 0.05*(car.x - this.x);
            this.img.style.left = this.x+"px";
        }

    }

    moveY(){
        if(car.y > this.y){
            this.img.src = "../image/policecarDown.png";
            this.y = this.y + 0.05*(car.y - this.y);
            this.img.style.top = this.y+"px";
        }else{
            this.img.src = "../image/policecarUp.png";
            this.y = this.y + 0.05*(car.y - this.y);
            this.img.style.top = this.y+"px";
        }

    }


}