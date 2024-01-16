number_of_costumers = int(input())
basket = 1.50
wreath = 3.80
chocolate_bunny = 7
total_price = 0

for customers in range(number_of_costumers):
    command = input()
    price_per_client= 0
    counter = 0
    while command != "Finish":
        counter += 1
        if command == "basket":
            price_per_client += basket
        elif command == "wreath":
            price_per_client += wreath
        else:
            price_per_client += chocolate_bunny

        command = input()
    if counter % 2 == 0:
        price_per_client *= 0.8
    total_price += price_per_client
    print(f"You purchased {counter} items for {price_per_client:.2f} leva.")

average_price = total_price / number_of_costumers
print(f"Average bill per client is: {average_price:.2f} leva.")
