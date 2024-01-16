winner_points = 0
winner_name = ""
while True:
    name_of_player = input()
    if name_of_player == "Stop":
        break

    length = len(name_of_player)
    points = 0
    for symbol in range(length):
        number = int(input())


        asci = ord(name_of_player[symbol])

        if number == asci:
            points += 10
        else:
            points += 2


    if points >= winner_points:
        winner_points = points
        winner_name = name_of_player


print(f"The winner is {winner_name} with {winner_points} points!")

