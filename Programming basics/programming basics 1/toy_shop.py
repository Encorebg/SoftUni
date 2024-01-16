price_of_excursion = float(input())
number_of_puzzles = int(input())
number_of_talking_dolls = int(input())
number_of_teddy_bears = int(input())
number_of_minions = int(input())
number_of_trucks = int(input())

total_profit = number_of_puzzles * 2.60 + number_of_talking_dolls * 3 + number_of_teddy_bears * 4.1 \
    + number_of_minions * 8.20 + number_of_trucks * 2
total_toys = number_of_puzzles + number_of_talking_dolls + number_of_teddy_bears + number_of_minions + number_of_trucks

if total_toys >= 50:
    total_profit *= 0.75

total_profit *= 0.9
diff = abs(total_profit - price_of_excursion)

if total_profit >= price_of_excursion:
    print(f"Yes! {diff:.2f} lv left.")
else:
    print(f"Not enough money! {diff:.2f} lv needed.")


