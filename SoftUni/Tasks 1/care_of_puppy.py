food_bought = int(input())
food_bought *= 1000
command = input()
food_counter = 0

while command != "Adopted":
    command = int(command)
    food_counter += command
    command = input()


diff = abs(food_bought - food_counter)

if food_counter <= food_bought:
    print(f"Food is enough! Leftovers: {diff} grams.")
else:
    print(f"Food is not enough. You need {diff} grams more." )