def bottle_song(num):
	
	if num==1: print ("1 bottle of beer on the wall. 1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");num-=1; return num
	elif (num<=0):print("empty: go to the store, get more beer")
	elif num>=2: print(f"{num} bottles of beer on the wall {num} bottles of beer. Take one down and pass it around {num-1} bottles of beer on the wall"); 
num=99
while num >0:
	bottle_song(num)
	num-=1



