class Pufferfish_Green extends MovableObject{
 
    width = 100;
    height = 75;
    speed = 1;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 20,
    }
    isInTransition = false;
    
    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];

    constructor(){
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_TRANSITION);
        this.x = 600 + Math.random() * 120;
        this.y = Math.random() * ((450 - this.height) - 20 + 20);
        this.checkTime();
        this.swimLeft();
        this.animate();
        this.checkTransition();
    }

    animate(){
        setInterval(() => {
           this.playAnimation(this.IMAGES_SWIMMING);   
        }, 100);
    } 

    checkTransition(){
        this.currentImage = 0;
        if (!this.isInTransition) {
            let transition = setInterval(() => {
                this.loadImage(this.IMAGES_TRANSITION[4]);
                this.offset.height = 0;
            }, 100);
            setTimeout(() => {
                clearInterval(transition);
                this.offset.height = 20;
            }, 3000);
            setTimeout(()=>{
                this.checkTransition();
            },6000)
        }
    }
}