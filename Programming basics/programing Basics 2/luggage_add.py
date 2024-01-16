price_for_luggage_over_20 = float(input())
kilograms_of_luggage = float(input())
days_to_travel = int(input())
number_of_luggage = int(input())

price_for_luggage = 0

if kilograms_of_luggage < 10:
    price_for_luggage = price_for_luggage_over_20 * 0.2
elif 10 <= kilograms_of_luggage <= 20:
    price_for_luggage = price_for_luggage_over_20 * 0.5
else:
    price_for_luggage = price_for_luggage_over_20

if days_to_travel < 7:
    price_for_luggage *= 1.4
elif 7 <= days_to_travel <= 30:
    price_for_luggage *= 1.15
else:
    price_for_luggage *= 1.1

total_price = price_for_luggage * number_of_luggage

print(f"The total price of bags is: {total_price:.2f} lv.")

