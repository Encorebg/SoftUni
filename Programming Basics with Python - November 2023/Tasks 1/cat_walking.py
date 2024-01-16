minute_walking_per_day = int(input())
number_of_walking_per_day = int(input())
calories_taken_by_cat = int(input())

total_minute_of_walking = number_of_walking_per_day * minute_walking_per_day
total_calories_per_day_burned = total_minute_of_walking * 5

half_taken_calories = calories_taken_by_cat * 50 / 100

if total_calories_per_day_burned >= half_taken_calories:
    print(f"Yes, the walk for your cat is enough. Burned calories per day: {total_calories_per_day_burned}.")
else:
    print(f"No, the walk for your cat is not enough. Burned calories per day: {total_calories_per_day_burned}.")