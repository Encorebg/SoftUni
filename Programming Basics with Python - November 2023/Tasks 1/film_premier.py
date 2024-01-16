projection = input()
package_for_movie = input()
number_of_tickets = int(input())

if projection == "John Wick":
    if package_for_movie == "Drink":
        price = 12
    elif package_for_movie == "Popcorn":
        price = 15
    else:
        price = 19
elif projection == "Star Wars":
    if package_for_movie == "Drink":
        price = 18
    elif package_for_movie == "Popcorn":
        price = 25
    else:
        price = 30
else:
    if package_for_movie == "Drink":
        price = 9
    elif package_for_movie == "Popcorn":
        price = 11
    else:
        price = 14

if projection == "Star Wars" and number_of_tickets > 3:
    price *= 0.7
elif projection == "Jumanji" and number_of_tickets == 2:
    price *= 0.85

total = number_of_tickets * price
print(f"Your bill is {total:.2f} leva.")


