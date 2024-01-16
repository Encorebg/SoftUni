city = input()
volume_of_sales = float(input())
commision = 0

if city == "Sofia":
    if 0 <= volume_of_sales <= 500:
        commision = 0.05 * volume_of_sales
        print(f'{commision:.2f}')
    elif 500 < volume_of_sales <= 1000:
        commision = 0.07 * volume_of_sales
        print(f'{commision:.2f}')
    elif 1000 < volume_of_sales <= 10000:
        commision = 0.08 * volume_of_sales
        print(f'{commision:.2f}')
    elif 10000 < volume_of_sales:
        commision = 0.12 * volume_of_sales
        print(f'{commision:.2f}')
    else:
        print("error")
elif city == "Varna":
    if 0 <= volume_of_sales <= 500:
        commision = 0.045 * volume_of_sales
        print(f'{commision:.2f}')
    elif 500 < volume_of_sales <= 1000:
        commision = 0.075 * volume_of_sales
        print(f'{commision:.2f}')
    elif 1000 < volume_of_sales <= 10000:
        commision = 0.1 * volume_of_sales
        print(f'{commision:.2f}')
    elif 10000 < volume_of_sales:
        commision = 0.13 * volume_of_sales
        print(f'{commision:.2f}')
    else:
        print("error")
elif city == "Plovdiv":
    if 0 <= volume_of_sales <= 500:
        commision = 0.055 * volume_of_sales
        print(f'{commision:.2f}')
    elif 500 < volume_of_sales <= 1000:
        commision = 0.08 * volume_of_sales
        print(f'{commision:.2f}')
    elif 1000 < volume_of_sales <= 10000:
        commision = 0.12 * volume_of_sales
        print(f'{commision:.2f}')
    elif 10000 < volume_of_sales:
        commision = 0.145 * volume_of_sales
        print(f'{commision:.2f}')
    else:
        print("error")
else:
    print("error")