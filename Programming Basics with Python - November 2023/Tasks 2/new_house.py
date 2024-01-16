type_of_flowers = input()
number_of_flowers = int(input())
budget = int(input())
price = 0
total_costs = 0

if type_of_flowers == "Roses":
    price = 5
    total_costs = price * number_of_flowers
    if number_of_flowers > 90:
        total_costs *= 0.9
elif type_of_flowers == "Dahlias":
    price = 3.80
    total_costs = price * number_of_flowers
    if number_of_flowers > 90:
        total_costs *= 0.85
elif type_of_flowers == "Tulips":
    price = 2.80
    total_costs = price * number_of_flowers
    if number_of_flowers > 80:
        total_costs *= 0.85
elif type_of_flowers == "Narcissus":
    price = 3
    total_costs = price * number_of_flowers
    if number_of_flowers < 120:
        total_costs *= 1.15
elif type_of_flowers == "Gladiolus":
    price = 2.50
    total_costs = price * number_of_flowers
    if number_of_flowers < 80:
        total_costs *= 1.20

diff = abs(total_costs - budget)

if budget >= total_costs:
    print(f"Hey, you have a great garden with {number_of_flowers} {type_of_flowers} and {diff:.2f} leva left.")
else:
    print(f"Not enough money, you need {diff:.2f} leva more.")