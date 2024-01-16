bought_food = int(input())
food_in_grams = bought_food * 1000
total_foo_eaten = 0
while True:
    command = input()

    if command == "Adopted":
        break

    command = int(command)
    total_foo_eaten += command


diff = abs(food_in_grams - total_foo_eaten)

if food_in_grams >= total_foo_eaten:
    print(f"Food is enough! Leftovers: {diff} grams.")
else:
    print(f"Food is not enough. You need {diff} grams more.")
