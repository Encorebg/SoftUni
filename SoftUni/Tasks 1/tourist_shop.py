budget = float(input())

name_of_product = input()
product_counter = 0
total_price = 0
not_enough_budget = False

while name_of_product != "Stop":
    price_of_product = float(input())

    product_counter += 1

    if product_counter % 3 == 0:
        price_of_product /= 2

    if budget < price_of_product:
        not_enough_budget = True
        break



    total_price += price_of_product
    budget -= price_of_product
    name_of_product = input()

if not_enough_budget:
    diff = price_of_product - budget
    print("You don't have enough money!")
    print(f"You need {diff:.2f} leva!")
else:
    print(f"You bought {product_counter} products for {total_price:.2f} leva.")