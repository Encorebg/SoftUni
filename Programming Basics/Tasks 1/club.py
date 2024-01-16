wished_profit = float(input())

income_counter = 0
name_of_coctail = input()

while name_of_coctail != "Party!":
    number_of_coctails = int(input())
    coctail_price = len(name_of_coctail)
    total_price = number_of_coctails * coctail_price
    if total_price % 2 != 0:
        total_price *= 0.75
    income_counter += total_price
    if wished_profit <= income_counter:
        break
    name_of_coctail = input()


if wished_profit <= income_counter:
    print("Target acquired.")
else:
    diff = wished_profit - income_counter
    print(f"We need {diff:.2f} leva more.")

print(f"Club income - {income_counter:.2f} leva.")