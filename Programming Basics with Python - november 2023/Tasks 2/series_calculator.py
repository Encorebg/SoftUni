from math import floor
name_of_series = input()
number_of_seasons = int(input())
number_of_episodes = int(input())
duration = float(input())


time_for_advertisment = 0.2 * duration
additional_time_for_special_epsiodes = number_of_seasons * 10
time_with_advetisment = time_for_advertisment + duration

total_time = time_with_advetisment * number_of_episodes * number_of_seasons + additional_time_for_special_epsiodes
print(f"Total time needed to watch the {name_of_series} series is {floor(total_time)} minutes.")

