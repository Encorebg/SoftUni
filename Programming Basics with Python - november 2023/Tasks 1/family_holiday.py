budget = float(input())
number_of_nights = int(input())
price_for_night = float(input())
percent_additional_costs = int(input())

if number_of_nights > 7:
    price_for_night *= 0.95

additional_costs = budget * (percent_additional_costs / 100)

total_costs = number_of_nights * price_for_night + additional_costs

diff = f"{abs(budget - total_costs):.2f}"

if total_costs <= budget:
    print(f"Ivanovi will be left with {diff} leva after vacation.")
else:
    print(f"{diff} leva needed.")