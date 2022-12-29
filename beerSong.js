const firstPhrase = 'bottles of beer on the wall,';
const secondPhrase = 'bottles of beer.';
const thirdPhrase = 'Take one down and pass it around,';
const oneBottle = 'bottle of beer on the wall.';
const oneBottleIntro = 'bottle of beer on the wall,';
const oneBottleOutro = 'bottle of beer.';
const noBottlesIntro = 'Take one down and pass it around, no more bottles of beer on the wall.';
const noBottlesOutro = 'No more bottles of beer on the wall, no more bottles of beer.';
const finalLine1 = 'Go to the store and buy some more,';
const finalLine2 = 'bottles of beer on the wall.'

const beerSong = () => {
    for (let beer = 99; beer >= 0;) {
        if (beer > 1) {
            console.log(beer, firstPhrase, beer, secondPhrase);
            beer -= 1;
            if (beer > 1) {
                console.log(thirdPhrase, beer, secondPhrase);
            } else if (beer === 1) {
                console.log(thirdPhrase, beer, oneBottle);
            }
            
        }else if (beer === 1) {
            
            console.log(beer, oneBottleIntro, beer, oneBottleOutro);
            beer = 99;
            console.log(noBottlesIntro);
            console.log(noBottlesOutro);
            console.log(finalLine1, beer, finalLine2);
            return
        }
            
    };
};

beerSong()