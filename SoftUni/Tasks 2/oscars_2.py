name_of_actor = input()
points_from_academy = float(input())
number_of_jurys = int(input())
total_points = points_from_academy
got_nomination = False

for _ in range(number_of_jurys):
    name_of_jury = input()
    points_from_jury = float(input())

    name_of_jury = len(name_of_jury)
    total_points += name_of_jury * points_from_jury / 2


    if total_points > 1250.5:
        got_nomination = True
        break

if got_nomination:
    print(f"Congratulations, {name_of_actor} got a nominee for leading role with {total_points:.1f}!")
else:
    needed_points = 1250.5 - total_points
    print(f"Sorry, {name_of_actor} you need {needed_points:.1f} more!")