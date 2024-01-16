from math import ceil

number_of_people = int(input())
tax = float(input())
lounge_price = float(input())
umbrella_price = float(input())

entry_tax = number_of_people * tax
people_with_lounge_tax = (ceil(number_of_people * 0.75)) * lounge_price
number_of_umbrellas_tax = (ceil((number_of_people * 0.5)) * umbrella_price)
total_tax = entry_tax + people_with_lounge_tax + number_of_umbrellas_tax

print(f"{total_tax:.2f} lv.")