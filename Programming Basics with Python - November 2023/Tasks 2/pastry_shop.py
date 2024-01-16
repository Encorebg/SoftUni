cookie = input()
number_of_cookies = int(input())
day = int(input())

if day <= 15:
    if cookie == "Cake":
        price = 24
    elif cookie == "Souffle":
        price = 6.66
    else:
        price = 12.60
else:
    if cookie == "Cake":
        price = 28.70
    elif cookie == "Souffle":
        price = 9.80
    else:
        price = 16.98

total_price = price * number_of_cookies

if day <= 22:
    if 100 <= total_price <= 200:
        total_price *= 0.85
    elif total_price > 200:
        total_price *= 0.75

    if day <= 15:
        total_price *= 0.9

print(f"{total_price:.2f}")