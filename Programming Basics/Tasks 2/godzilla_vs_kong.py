budget = float(input())
number_of_actors = int(input())
price_for_clothing = float(input())

price_for_decoration = budget * 0.1

if number_of_actors > 150:
    price_for_clothing *= 0.9

total_sum = price_for_clothing * number_of_actors + price_for_decoration
diff = f'{abs(total_sum - budget):.2f}'

if total_sum <= budget:
    print("Action!")
    print(f"Wingard starts filming with {diff} leva left.")
else:
    print(f'Not enough money!')
    print(f'Wingard needs {diff} leva more.')