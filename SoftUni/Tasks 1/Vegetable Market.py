kilogram_vegetables = float(input())
kilogram_fruits = float(input())
total_kilogram_vegetables = int(input())
total_kilogram_fruits = int(input())

total_costs = (kilogram_fruits * total_kilogram_fruits + kilogram_vegetables * total_kilogram_vegetables) / 1.94
print(f"{total_costs:.2f}")