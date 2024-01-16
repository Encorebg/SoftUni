drink = input()
sugar = input()
number_of_drinks = int(input())

if drink == "Espresso":
    if sugar == "Without":
        price = 0.90
    elif sugar == "Normal":
        price = 1
    else:
        price = 1.20
elif drink == "Cappuccino":
    if sugar == "Without":
        price = 1
    elif sugar == "Normal":
        price = 1.20
    else:
        price = 1.60
else:
    if sugar == "Without":
        price = 0.50
    elif sugar == "Normal":
        price = 0.60
    else:
        price = 0.70

total = price * number_of_drinks

if sugar == "Without":
    total *= 0.65
if drink == "Espresso" and number_of_drinks > 4:
    total *= 0.75
if total > 15:
    total *= 0.8

print(f"You bought {number_of_drinks} cups of {drink} for {total:.2f} lv.")

