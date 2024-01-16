hours = int(input())
minutes = int(input())

hours_to_mins = hours * 60
total_minutes = hours_to_mins + minutes + 15
hours = total_minutes // 60
minutes = total_minutes % 60

if hours < 24 and minutes < 10:
    print(f"{hours}:0{minutes}")
elif hours < 24 and minutes >= 10:
    print(f"{hours}:{minutes}")
elif hours == 24 and minutes < 10:
    print(f"0:0{minutes}")
else:
    print(f"0:{minutes}")

