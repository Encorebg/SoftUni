fruit = input()
size_of_set = input()
ordered_set = int(input())

if size_of_set == "small":
    if fruit == "Watermelon":
        price = 56
    elif fruit == "Mango":
        price = 36.66
    elif fruit == "Pineapple":
        price = 42.10
    else:
        price = 20
    price *= 2
else:
    if fruit == "Watermelon":
        price = 28.70
    elif fruit == "Mango":
        price = 19.60
    elif fruit == "Pineapple":
        price = 24.80
    else:
        price = 15.20
    price *= 5

total_price = price * ordered_set

if 400 <= total_price <= 1000:
    total_price *= 0.85
elif total_price > 1000:
    total_price *= 0.5

print(f'{total_price:.2f} lv.')