music.playMelody("A G A G A B E A ", 120)
basic.forever(function () {
    basic.showLeds(`
        . # . . .
        # . # . .
        . # # . #
        . # . # .
        # . # . .
        `)
    basic.showLeds(`
        . . . # .
        . # # . #
        # # . # #
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . # .
        . # # . #
        . . . # .
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # #
        # . # . .
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . # . . .
        # . # # .
        . # # # #
        . # . # .
        # . # . .
        `)
    basic.showString("UwU")
    basic.showNumber(12345)
})
control.inBackground(function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.ForeverInBackground)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
