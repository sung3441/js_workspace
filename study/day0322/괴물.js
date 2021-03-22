class Monster{
    //괴물 정보, 위치, 크기
    constructor(wrapper, img, speed){
        this.wrapper = wrapper;
        this.img = img;
        this.speed = speed;
        this.mon = document.createElement("img");
        this.mon.style.position = "absolute";
        this.mon.style.width = 200+"px";
        this.mon.style.height = 200+"px";
        this.mon.style.left = 50+"px";
        this.mon.src = img;
        this.y = 0;
        this.wrapper.appendChild(this.mon);
    }

//괴물의 움직임
    move(){
        this.y += this.speed;
        if(parseInt(this.mon.style.top)>=1100){
            this.wrapper.removeChild(this.mon);
            return true;
        }
        this.mon.style.top = this.y+"px";
        return false;
    }
}