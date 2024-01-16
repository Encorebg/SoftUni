import math
serial_name = input()
duration_of_episode = int(input())
duration_of_break = int(input())

duration_of_lunch = duration_of_break / 8
duration_for_rest = duration_of_break / 4

time_left = duration_of_break - (duration_of_lunch + duration_for_rest)

diff = abs(time_left - duration_of_episode)
diff = math.ceil(diff)

if time_left >= duration_of_episode:
    print(f"You have enough time to watch {serial_name} and left with {diff} minutes free time.")
else:
    print(f"You don't have enough time to watch {serial_name}, you need {diff} more minutes.")