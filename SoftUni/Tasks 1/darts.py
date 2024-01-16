name_of_player = input()
total = 301
good_shots = 0
bad_shots = 0
retired = False
while True:
    field = input()
    if field == "Retire":
        retired = True
        break

    points = int(input())

    if field == "Single":
        shot = points
    elif field == "Double":
        shot = points * 2
    else:
        shot = points * 3

    if shot > total:
        bad_shots += 1
        continue
    else:
        total -= shot
        good_shots += 1

    if total == 0:
        break

if retired:
    print(f"{name_of_player} retired after {bad_shots} unsuccessful shots.")
else:
    print(f"{name_of_player} won the leg with {good_shots} shots.")