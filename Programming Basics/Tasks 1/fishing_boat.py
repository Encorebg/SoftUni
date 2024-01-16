budget = int(input())
season = input()
number_of_fishermans = int(input())

price_for_boat = 0

if season == "Spring":
    price = 3000
elif season == "Summer" or season == "Autumn":
    price = 4200
else:
    price = 2600

if number_of_fishermans <= 6:
    price *= 0.9
elif 6 < number_of_fishermans <= 11:
    price *= 0.85
else:
    price *= 0.75

if number_of_fishermans % 2 == 0 and season != "Autumn":
    price *= 0.95

diff = abs(price - budget)

if budget >= price:
    print(f"Yes! You have {diff:.2f} leva left.")
else:
    print(f"Not enough money! You need {diff:.2f} leva.")