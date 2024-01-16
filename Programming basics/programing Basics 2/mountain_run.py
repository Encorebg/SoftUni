record_in_seconds = float(input())
distance_in_metres = float(input())
time_in_seconds_for_one_meter = float(input())

time_needed_for_distance = distance_in_metres * time_in_seconds_for_one_meter

delay = (distance_in_metres // 50) * 30

total_time = time_needed_for_distance + delay

if total_time < record_in_seconds:
    print(f"Yes! The new record is {total_time:.2f} seconds.")
else:
    diff = total_time - record_in_seconds
    print(f"No! He was {diff:.2f} seconds slower.")