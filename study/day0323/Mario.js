class Mario{
    constructor(src, wrapper){
        this.src = src;
        this.wrapper = wrapper;
        this.x = 0;
        this.y = 755;
        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.width = 80+"px";
        this.img.style.height = 100+"px";
        this.img.style.left = this.x+"px";
        this.img.style.top = this.y+"px";
        this.img.style.position = "absolute";
        this.targetY = 500;
        this.jumpY = 1;
        this.wrapper.appendChild(this.img);
        this.flag = false;
        this.velX = 0;
    }


    tick(){
        this.x += this.velX;
    }

    render(){
        this.img.style.left = this.x+"px";
    }

    marioJump(){
        if(this.flag){
            console.log("z");
            if(parseInt(this.img.style.top)<=this.targetY){
                this.jumpY *= -1; //땅으로 떨어지는 부분
            }
            this.y -= this.jumpY; //마리오 위로 올라가는
            this.img.style.top = this.y+"px";
            for(var i = 0; i < boxAr.length; i++){
                collisionCheck(this, boxAr[i])
            }
            if(parseInt(this.img.style.top)>= 755){
                this.flag = false;
                this.jumpY *= -1;
            }
        }
    }

    marioFlag(){
        this.flag = !this.flag;
    }



}