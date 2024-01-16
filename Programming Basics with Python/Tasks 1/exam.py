hour_of_exam = int(input())
minute_of_exam = int(input())
hour_of_arrival = int(input())
minute_of_arrival = int(input())

exam_in_mins = minute_of_exam + hour_of_exam * 60
arrival_in_mins = hour_of_arrival * 60 + minute_of_arrival
diff = abs(exam_in_mins - arrival_in_mins)
hours = diff // 60
mins = diff % 60

if arrival_in_mins < exam_in_mins - 30:
    print("Early")
    if arrival_in_mins <= exam_in_mins - 60:
        if mins < 10:
            print(f"{hours}:0{mins} hours before the start")
        else:
            print(f"{hours}:{mins} hours before the start")
    else:
            print(f"{mins} minutes before the start")

elif exam_in_mins - 30 <= arrival_in_mins <= exam_in_mins:
    print("On time")
    if arrival_in_mins < exam_in_mins:
            print(f"{mins} minutes before the start")


else:
    print("Late")
    if exam_in_mins < arrival_in_mins < exam_in_mins + 60:
        print(f"{mins} minutes after the start")
    else:
        if mins < 10:
            print(f"{hours}:0{mins} hours after the start")
        else:
            print(f"{hours}:{mins} hours after the start")

