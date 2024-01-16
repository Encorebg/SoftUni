length = float(input())
width = float(input())

width_without_coridor = width * 100 - 100
desks_on_row = int(width_without_coridor / 70)
desks_on_column = int(length * 100 / 120)

total_places = desks_on_column * desks_on_row - 3
print(total_places)