number_of_days = int(input())
total_food = float(input())

biscuit_counter = 0
cat_food_counter = 0
dog_food_counter = 0

for day in range(1, number_of_days + 1):
    dog_food_eaten = int(input())
    cat_food_eaten = int(input())

    if day % 3 == 0:
        biscuits = (dog_food_eaten + cat_food_eaten) * 0.1
        biscuit_counter += biscuits

    cat_food_counter += cat_food_eaten
    dog_food_counter += dog_food_eaten

biscuit_counter = round(biscuit_counter)
total_food_eaten = cat_food_counter + dog_food_counter
percent_food_eaten = total_food_eaten / total_food * 100
percent_cat_food = cat_food_counter / total_food_eaten * 100
percent_dog_food = dog_food_counter / total_food_eaten * 100

print(f"Total eaten biscuits: {biscuit_counter}gr.")
print(f"{percent_food_eaten:.2f}% of the food has been eaten.")
print(f"{percent_dog_food:.2f}% eaten from the dog.")
print(f"{percent_cat_food:.2f}% eaten from the cat.")

