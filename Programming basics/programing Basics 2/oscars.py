name_of_actor = input()
points_from_academy = float(input())
number_of_juris = int(input())
points_for_actor = 0
total_points = 0

for _ in range(number_of_juris):
    jury = input()
    points_from_jury = float(input())
    points_for_actor += points_from_jury * len(jury) / 2
    total_points = points_from_academy + points_for_actor

    if total_points > 1250.5:
        print(f"Congratulations, {name_of_actor} got a nominee for leading role with {total_points:.1f}!")
        break


if total_points < 1250.5:
    needed_points = 1250.5 - total_points
    print(f"Sorry, {name_of_actor} you need {needed_points:.1f} more!")