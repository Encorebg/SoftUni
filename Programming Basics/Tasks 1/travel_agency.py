city_name = input()
package_type = input()
discount = input()
days_to_stay = int(input())

if days_to_stay < 1:
    print("Days must be positive number!")
    exit()
if discount == "yes":
    if city_name == "Bansko" or city_name == "Borovets":
        if package_type == "noEquipment":
            price = 80 * 0.95
        elif package_type == "withEquipment":
            price = 100 * 0.9
        else:
            print("Invalid input!")
            exit()
    elif city_name == "Varna" or city_name == "Burgas":
        if package_type == "noBreakfast":
            price = 100 * 0.93
        elif package_type == "withBreakfast":
            price = 130 * 0.88
        else:
            print("Invalid input!")
            exit()
    else:
        print("Invalid input!")
        exit()

else:
    if city_name == "Bansko" or city_name == "Borovets":
        if package_type == "noEquipment":
            price = 80
        elif package_type == "withEquipment":
            price = 100
        else:
            print("Invalid input!")
            exit()
    elif city_name == "Varna" or city_name == "Burgas":
        if package_type == "noBreakfast":
            price = 100
        elif package_type == "withBreakfast":
            price = 130
        else:
            print("Invalid input!")
            exit()

    else:
        print("Invalid input!")
        exit()

if days_to_stay > 7:
    days_to_stay -= 1
total_price = price * days_to_stay

print(f"The price is {total_price:.2f}lv! Have a nice time!")




