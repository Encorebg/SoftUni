name_of_player = input()
had_trick = False
best_score = 0
best_player = ""

while name_of_player != "END":
    number_of_goals = int(input())

    if number_of_goals >= 3:
        had_trick = True

    if number_of_goals > best_score:
        best_score = number_of_goals
        best_player = name_of_player
    if number_of_goals >= 10:
        break
    name_of_player = input()

print(f"{best_player} is the best player!")
if had_trick:
    print(f"He has scored {best_score} goals and made a hat-trick !!!")
else:
    print(f"He has scored {best_score} goals.")