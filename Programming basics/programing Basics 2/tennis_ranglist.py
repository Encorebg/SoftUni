import math

number_of_tournaments = int(input())
starting_points = int(input())
points_from_toournament = 0
tournament_won = 0

for _ in range(number_of_tournaments):
    stage_of_tournament = input()

    if stage_of_tournament == "W":
        points_from_toournament += 2000
        tournament_won += 1
    elif stage_of_tournament == "F":
        points_from_toournament += 1200
    else:
        points_from_toournament += 720


average_points = points_from_toournament / number_of_tournaments
percent_tournaments_won = tournament_won / number_of_tournaments * 100
total_points = starting_points + points_from_toournament

print(f"Final points: {total_points}")
print(f"Average points: {math.floor(average_points)}")
print(f"{percent_tournaments_won:.2f}%")