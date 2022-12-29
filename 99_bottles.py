def bottle_song():
	song1 = 'bottles of beer on the wall,'
	song2 = 'bottles of beer.'
	song3 = 'Take one down and pass it around,'
	song4 = 'bottles of beer on the wall.'
	oneBottle = 'bottle of beer on the wall.'
	oneBottleIntro = 'bottle of beer on the wall,'
	oneBottleOutro = 'bottle of beer.'
	noBottlesIntro = 'Take one down and pass it around, no more bottles of beer on the wall.'
	noBottlesOutro = 'No more bottles of beer on the wall, no more bottles of beer.'
	finalLine1 = 'Go to the store and buy some more,'
	finalLine2 = 'bottles of beer on the wall.'
	bottles = 99
	for beer in range(bottles, 0, -1):
		if beer > 1:
			print(beer, song1, beer, song2)
			beer -= 1
			if beer > 1:
				print(song3, beer, song4)
			elif beer == 1:
				print(song3, beer, oneBottle)
		elif beer == 1:
			print(beer, oneBottleIntro, beer, oneBottleOutro)
			bottles = 99
			print(noBottlesIntro)
			print(noBottlesOutro)
			print(finalLine1, bottles, finalLine2)
			return


bottle_song()
