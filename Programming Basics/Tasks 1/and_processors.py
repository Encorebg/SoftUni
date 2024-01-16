import math

number_of_cpus_to_be_made = int(input())
number_of_workers = int(input())
working_days = int(input())

total_working = working_days * number_of_workers * 8
total_cpus_made = math.floor(total_working / 3)

diff = abs(number_of_cpus_to_be_made - total_cpus_made) * 110.10

if total_cpus_made >= number_of_cpus_to_be_made:
    print(f"Profit: -> {diff:.2f} BGN")
else:
    print(f"Losses: -> {diff:.2f} BGN")