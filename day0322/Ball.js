class Ball{
    //new 연산자에 의해 호출되는 메서드를 생성자 메서드라고 하고,
    //생성자 메서드의 목적인 이 객체가 인스턴스화 될 때,
    //즉 사물이 탄생할 때 알맞는 개성을 부여하기 위함.
    
    //사물의 모습, 상태 등 형용사 적인 것. 사실 상 변수 값
    //담을 곳, 볼의 보폭, 볼의 색, 시작 x값, 시작 y 값
    constructor(container, b_speed, b_color, x, y){
        this.container = container;//어디에 붙일지를 결정짓지 말고, 호출자가 결정하도록;
        this.speed = b_speed;
        this.color = b_color;
        this.y = y;
        this.x = x;
        (this.y>400)? this.flagY = -1 : this.flagY = 1;
        (this.x>400)? this.flagX = -1 : this.flagX = 1;

        console.log(this.flagX);
        console.log(this.flagY);
        console.log(this.x);
        console.log(this.y);


        this.div = document.createElement("div");
        this.div.style.width = 35+"px";
        this.div.style.height = 35+"px";
        this.div.style.color = this.color;
        this.div.innerText = "●";
        this.div.style.fontSize = 35+"px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
        

        //div부모 요소에 부착
        this.container.appendChild(this.div);
    }

    //볼의 움직임 설정
    ballMove(){
        //바닥 접촉
        if(this.y>=640){
            this.flagY*=-1;
        //천장 접촉
        }else if(this.y<=15){
            this.flagY*=-1;
        //좌측 접촉
        }else if(this.x<=15){
            this.flagX*=-1;
        }else if(this.x>=740){
            this.flagX*=-1;
        }



        this.y += (this.speed*this.flagY);
        this.x += (this.speed*this.flagX);
        this.div.style.left = parseInt(this.x)+"px";
        this.div.style.top = parseInt(this.y)+"px";

    }
}