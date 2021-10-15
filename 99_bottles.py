def bottle_song(num_bottle):
	# write your code here!
	verse ="""
	{0} {2} of beer on the wall
	{0} {2} of beer
	Take one down, pass it around
	{1} {3} of beer on the wall
	"""
	for i in range(num_bottle,0,-1):
		print(verse.format(
		i, #0
		i-1, #1
		"bottle" if i == 1 else "bottles", #2
		"bottle" if i-1 == 1 else "bottles"))#3
	
	

bottle_song(99)

## Hello world ! 
