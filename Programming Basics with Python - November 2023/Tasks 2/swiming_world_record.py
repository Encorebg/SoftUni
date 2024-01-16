record = float(input())
distance = float(input())
time_for_one_meter = float(input())

time_for_distance = distance * time_for_one_meter
times_to_delay = distance // 15
delay = times_to_delay * 12.5
total_time = time_for_distance + delay



if total_time < record:
    print(f" Yes, he succeeded! The new world record is {total_time:.2f} seconds.")
else:
    diff = total_time - record
    print(f"No, he failed! He was {diff:.2f} seconds slower.")
