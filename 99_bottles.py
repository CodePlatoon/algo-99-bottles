# Takes integer input from the user and outputs the lyrics to the 99 Bottles of Beer on the Wall bottle 
# Author: Dave Graham
# Version 02292024


def bottle_song():
    cnt = int(input('How many bottles would you like to sing about? '))
    while cnt > 1:
        message = f'{cnt} bottles of beer on the wall, {cnt} bottles of beer.'
        print(message)
        cnt -= 1
        if cnt == 1:
            message2 = f'Take one down and pass it around, {cnt} bottle of beer on the wall.'
            print(message2)
            break
        else:
            message2 = f'Take one down and pass it around, {cnt} bottles of beer on the wall.'
        print(message2)
    cnt -= 1    
    print('''1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.''')


bottle_song()
