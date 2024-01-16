budget = float(input())
destination = input()
season = input()
number_of_days = int(input())

if season == "Winter":
    if destination == "Dubai":
        price_per_night = 45000
    elif destination == "Sofia":
        price_per_night = 17000
    else:
        price_per_night = 24000
else:
    if destination == "Dubai":
        price_per_night = 40000
    elif destination == "Sofia":
        price_per_night = 12500
    else:
        price_per_night = 20250

if destination == "Dubai":
    price_per_night *= 0.7
elif destination == "Sofia":
    price_per_night *= 1.25

total_price = number_of_days * price_per_night
diff = f"{abs(total_price - budget):.2f}"

if total_price <= budget:
    print(f"The budget for the movie is enough! We have {diff} leva left!")
else:
    print(f"The director needs {diff} leva more!")