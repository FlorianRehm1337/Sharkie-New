class Poisonbar extends DrawableObject{
    

    IMAGES = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];

    bottles = 0;

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 520;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setCollectedBottles(0);
    }

    setCollectedBottles(coin){
        this.coins = coin;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path]

    }

    resolveImageIndex(){
        if(this.coins == 5){
            return 5
        }else if(this.coins == 4){
            return 4
        }else if(this.coins == 3){
            return 3
        }else if(this.coins == 2){
            return 2
        }else if(this.coins == 1){
            return 1
        }else {
            return 0
        }
    }
}