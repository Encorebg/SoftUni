number_of_breads = int(input())
best_player = 0
best_player_name = ''
for breads in range(number_of_breads):
    name = input()
    points = 0
    while True:
        evaluation = input()
        if evaluation == "Stop":
            break
        evaluation = int(evaluation)
        points += evaluation
    print(f"{name} has {points} points.")
    if points > best_player:
        best_player = points
        best_player_name = name
        print(f"{name} is the new number 1!")

print(f"{best_player_name} won competition with {best_player} points!")
