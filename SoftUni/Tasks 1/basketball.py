command = input()
wins = 0
losses = 0
total = 0
while command != "End of tournaments":
    number_of_matches = int(input())
    match_counter = 0
    for matches in range(number_of_matches):
        points_of_desi_team = int(input())
        points_of_enemy_team = int(input())
        match_counter += 1
        total += 1
        diff = abs(points_of_desi_team - points_of_enemy_team)

        if points_of_desi_team > points_of_enemy_team:
            print(f"Game {match_counter} of tournament {command}: win with {diff} points.")
            wins += 1
        else:
            print(f"Game {match_counter} of tournament {command}: lost with {diff} points.")
            losses += 1
    command = input()

percent_win = wins / total * 100
percent_lost = losses / total * 100
print(f"{percent_win:.2f}% matches win")
print(f"{percent_lost:.2f}% matches lost")
