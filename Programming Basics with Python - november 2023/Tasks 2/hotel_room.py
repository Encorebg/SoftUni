month = input()
number_of_nights = int(input())
studio = 0
apartment = 0

if month == "May" or month == "October":
    studio = 50
    apartment = 65
    if 7 < number_of_nights <= 14:
        studio *= 0.95
    elif 14 < number_of_nights:
        studio *= 0.7
elif month == "June" or month == "September":
    studio = 75.20
    apartment = 68.70
    if number_of_nights > 14:
        studio *= 0.8
else:
    studio = 76
    apartment = 77

if number_of_nights > 14:
    apartment *= 0.9

apartment_cost = apartment * number_of_nights
studio_cost = studio * number_of_nights

print(f"Apartment: {apartment_cost:.2f} lv.")
print(f"Studio: {studio_cost:.2f} lv.")