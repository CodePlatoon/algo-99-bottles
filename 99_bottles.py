def bottle_song(num):
	for i in range(99, 0, -1):
		if i > 2:
			print("{} bottles of beer on the wall,\n{} bottles of beer. \nTake one down and pass it around, \n{} bottles of beer on the wall.\n".format(i,i,i-1))
		elif i == 2:
			print("2 bottles of beer on the wall,\n2 bottles of beer. \nTake one down and pass it around, \n1 bottle of beer on the wall. \n\1 bottle of beer on the wall, \1 bottle of beer. \nTake it down, pass it around,\n1 bottles of beer on the wall.\n".format(i,i,num))
		else:
			print("{} bottle of beer on the wall,\n{} bottle of beer. \nTake one down and pass it around, \nno more bottles of beer on the wall. \n\nNo more bottles of beer on the wall, \nno more bottles of beer. \nGo to the store and buy some more,\nNo bottles of beer on the wall.\n".format(i,i,num))