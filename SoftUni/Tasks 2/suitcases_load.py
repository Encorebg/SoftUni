booty_capacitet = float(input())
case_counter = 0
case_loaded = 0
all_is_loaded = False
while True:
    volume_of_case = input()

    if volume_of_case == "End":
        all_is_loaded = True
        break

    volume_of_case = float(volume_of_case)
    case_counter += 1

    if case_counter % 3 == 0:
        volume_of_case *= 1.1

    booty_capacitet -= volume_of_case
    if booty_capacitet < 0:
        break

    case_loaded += 1



if all_is_loaded:
    print(f"Congratulations! All suitcases are loaded!")
else:
    print("No more space!")
print(f"Statistic: {case_loaded} suitcases loaded.")