def bottle_song(num):
    while num >= 0:
        if num == 2:
            print(f"{num} bottles of beer on the wall, {num} bottles of beer. \nTake one down and pass it around, {num-1} bottle of beer on the wall.")
            num -= 1
        elif num == 1:
            print(f"{num} bottle of beer on the wall, {num} bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.")
            num -= 1
        elif num == 0:
            print(f"No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.")
            num -= 1
        else:
            print(f"{num} bottles of beer on the wall, {num} bottles of beer. \nTake one down and pass it around, {num-1} bottles of beer on the wall.")
            num -= 1


bottle_song(10)

#hello