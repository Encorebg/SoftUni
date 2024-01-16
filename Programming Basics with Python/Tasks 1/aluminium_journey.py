number_of_windows = int(input())
type_of_window = input()
delivery = input()

if number_of_windows < 10:
    print("Invalid order")
else:
    if type_of_window == "90X130":
        price = 110
        if 30 < number_of_windows <= 60:
            price *= 0.95
        elif number_of_windows > 60:
            price *= 0.92
    elif type_of_window == "100X150":
        price = 140
        if 40 < number_of_windows <= 80:
            price *= 0.94
        elif number_of_windows > 80:
            price *= 0.9
    elif type_of_window == "130X180":
        price = 190
        if 20 < number_of_windows <= 50:
            price *= 0.93
        elif number_of_windows > 50:
            price *= 0.88
    else:
        price = 250
        if 25 < number_of_windows <= 50:
            price *= 0.91
        elif number_of_windows > 50:
            price *= 0.86

    total_price = price * number_of_windows

    if delivery == "With delivery":
        total_price += 60

    if number_of_windows > 99:
        total_price *= 0.96

    print(f"{total_price:.2f} BGN")
