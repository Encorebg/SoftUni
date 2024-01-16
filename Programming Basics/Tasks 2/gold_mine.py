number_of_locations = int(input())


for locations in range(number_of_locations):
    gold_counter = 0
    expected_gold_per_day = float(input())
    number_days_per_location = int(input())
    for days in range(number_days_per_location):
        gold_per_day = float(input())
        gold_counter += gold_per_day

    average_gold = gold_counter / number_days_per_location

    if average_gold >= expected_gold_per_day:
        print(f"Good job! Average gold per day: {average_gold:.2f}.")
    else:
        diff = expected_gold_per_day - average_gold
        print(f"You need {diff:.2f} gold.")