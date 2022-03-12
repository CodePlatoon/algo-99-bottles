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
			print("Take one down and pass it around,",bottles,"bottles of beer on the wall.")

bottle_song()
