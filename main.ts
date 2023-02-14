controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c . . . f f f f . . . c . . 
        . . . c . . 1 1 1 1 . . c . . . 
        . . . . c . f f f f . c . . . . 
        . . . . . c 1 1 1 1 c . . . . . 
        . . 1 c c c c c c c c c c 1 . . 
        . . . . . . c c c c c . . . . . 
        . . . . . . c c c c . c . . . . 
        . . . . . . c c c c . . c . . . 
        . . . . . c c c c c . . . c . . 
        . . . . c . c . . c . . . . c . 
        . . . c . . c . . c . . . . . . 
        . . c . . . c . . c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 1 2 1 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . 8 8 8 f 2 2 8 8 8 . . . . 
    . . . 8 . . 2 f 2 . . 8 . . . . 
    . . . 2 . . 2 2 f . . 2 . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
