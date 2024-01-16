name_of_team = input()
number_of_matches = int(input())
games_counter = 0
win = 0
draft = 0
lose = 0

for match in range(number_of_matches):
    result = input()
    games_counter += 1

    if result == "W":
        win += 1
    elif result == "D":
        draft += 1
    else:
        lose += 1

if number_of_matches == 0:
    print(f"{name_of_team} hasn't played any games during this season.")
else:
    total_points = (win * 3) + (draft * 1)
    percent_success = win / games_counter * 100
    print(f"{name_of_team} has won {total_points} points during this season.")
    print(f"Total stats:")
    print(f"## W: {win}")
    print(f"## D: {draft}")
    print(f"## L: {lose}")
    print(f"Win rate: {percent_success:.2f}%")