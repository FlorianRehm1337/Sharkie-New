const level1 = new Level(
    [
        new Pufferfish_Green(),
        new Pufferfish_Orange(),
        new Pufferfish_Red(),
    ],
    [
        new JellyFish_Yellow(500),
        new JellyFish_Pink(750),
        new JellyFish_Purple(1000),
        new JellyFish_Green(1250),
    ],
    [
        new Endboss(),
    ], 
    [
        new Light(`img/3. Background/Layers/1. Light/2.png`,0),
        new Light(`img/3. Background/Layers/1. Light/1.png`,720),
        new Light(`img/3. Background/Layers/1. Light/2.png`,720*2),
        new Light(`img/3. Background/Layers/1. Light/1.png`,720*3),
        new Light(`img/3. Background/Layers/1. Light/2.png`,720*4),
        new Light(`img/3. Background/Layers/1. Light/1.png`,720*5),
        new Light(`img/3. Background/Layers/1. Light/2.png`,720*6),
        new Light(`img/3. Background/Layers/1. Light/1.png`,720*7),
        new Light(`img/3. Background/Layers/1. Light/2.png`,720*8),
        new Light(`img/3. Background/Layers/1. Light/1.png`,720*9),
        new Light(`img/3. Background/Layers/1. Light/2.png`,720*10),
    ],
    [
        new Coin(300),
        new Coin(450),
        new Coin(600),
        new Coin(750),
        new Coin(900),
        new Coin(1000),
        new Coin(1200),
        new Coin(1400),
        new Coin(1600),
        new Coin(1800),
    ],
    [
        new PoisonBottle(300),
        new PoisonBottle(600),
        new PoisonBottle(900),
        new PoisonBottle(1200),
        new PoisonBottle(1600),
    ],
    [
        new Life(300),
        new Life(600),
        new Life(900),
        new Life(1200),
        new Life(1500),
    ],
    [
        //BackgroundObjects Array
    ],
    [
        //new Barrier('img/3. Background/Barrier/3.png', 500, 0),
        
        //Barrier Array
    ]
    

)