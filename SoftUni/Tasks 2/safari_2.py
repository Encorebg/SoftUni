budget = float(input())
litres_fuel_needed = float(input())
day_of_week = input()

liter_fuel_price = 2.10
leader_price = 100

total_price = litres_fuel_needed * liter_fuel_price + leader_price

if day_of_week == "Saturday":
    total_price *= 0.9
else:
    total_price *= 0.8

diff = f'{abs(budget - total_price):.2f}'

if budget >= total_price:
    print(f"Safari time! Money left: {diff} lv. ")
else:
    print(f"Not enough money! Money needed: {diff} lv.")