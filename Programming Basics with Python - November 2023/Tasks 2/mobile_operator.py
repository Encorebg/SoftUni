time_of_contract = input()
type_of_contract = input()
added_mobile_internet = input()
monts_to_pay = int(input())

if time_of_contract == "one":
    if type_of_contract == "Small":
        price = 9.98
    elif type_of_contract == "Middle":
        price = 18.99
    elif type_of_contract == "Large":
        price = 25.98
    else:
        price = 35.99
else:
    if type_of_contract == "Small":
        price = 8.58
    elif type_of_contract == "Middle":
        price = 17.09
    elif type_of_contract == "Large":
        price = 23.59
    else:
        price = 31.79

if added_mobile_internet == "yes":
    if price <= 10:
        price += 5.50
    elif price <= 30:
        price += 4.35
    else:
        price += 3.85

total_price = price * monts_to_pay

if time_of_contract == "two":
    total_price *= 0.9625

print(f"{total_price:.2f} lv.")