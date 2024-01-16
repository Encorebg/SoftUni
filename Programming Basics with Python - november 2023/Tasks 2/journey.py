budget = float(input())
season = input()
destination = ''
sum = 0
type_of_holiday = ''
if budget <= 100:
    destination = "Bulgaria"
    if season =="summer":
        sum = budget * 0.3
        type_of_holiday = "Camp"
    else:
        sum = budget * 0.7
        type_of_holiday = "Hotel"

elif 100 < budget <= 1000:
    destination = "Balkans"
    if season =="summer":
        sum = budget * 0.4
        type_of_holiday = "Camp"
    else:
        sum = budget * 0.8
        type_of_holiday = "Hotel"
else:
    destination = "Europe"
    type_of_holiday = "Hotel"
    sum = budget * 0.9

print(f"Somewhere in {destination}")
print(f"{type_of_holiday} - {sum:.2f}")