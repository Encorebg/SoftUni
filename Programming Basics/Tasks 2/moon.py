import math

average_speed = float(input())
litres_needed_100 = float(input())

total_distance = 384400 * 2
time_to_go_and_back = math.ceil(total_distance / average_speed)
total_time = time_to_go_and_back + 3
fuel = litres_needed_100 * total_distance / 100

print(total_time)
print(f"{fuel:.0f}")