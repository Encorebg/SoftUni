budget = float(input())
number_of_nights = int(input())
price_per_night = float(input())
percent_additional_costs = int(input())

if number_of_nights > 7:
    price_per_night *= 0.95

additional_costs = budget * (percent_additional_costs / 100)

total_costs = price_per_night * number_of_nights + additional_costs

diff = f'{abs(total_costs - budget):.2f}'

if budget >= total_costs:
    print(f"Ivanovi will be left with {diff} leva after vacation.")
else:
    print(f"{diff} leva needed.")