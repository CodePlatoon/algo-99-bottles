def bottle_song():
	bottles = 99
	while bottles > 0: 
		if bottles > 1:
			print(bottles,"bottles of beer on the wall,",bottles,"bottles of beer.")
			bottles -= 1
			print("Take one down and pass it around,",bottles,"bottles of beer on the wall.")
		else: 
			print(bottles,"bottle of beer on the wall,",bottles,"bottle of beer.")
			bottles -= 1
			print("Take one down and pass it around, no more bottles of beer on the wall.")
			print("No more bottles of beer on the wall, no more bottles of beer.")
			print("Go to the store and buy some more, 99 bottles of beer on the wall.")

bottle_song()
