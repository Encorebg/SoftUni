import math

number_of_breads = int(input())
max_flour = 0
max_sugar = 0
sugar_counter = 0
flour_counter = 0

for breads in range(number_of_breads):
    quantity_sugar = int(input())
    quantity_flour = int(input())

    if quantity_sugar > max_sugar:
        max_sugar = quantity_sugar
    if quantity_flour > max_flour:
        max_flour = quantity_flour

    sugar_counter += quantity_sugar
    flour_counter += quantity_flour

packages_sugar = math.ceil(sugar_counter / 950)
packages_flour = math.ceil(flour_counter / 750)

print(f"Sugar: {packages_sugar}")
print(f"Flour: {packages_flour}")
print(f"Max used flour is {max_flour} grams, max used sugar is {max_sugar} grams.")