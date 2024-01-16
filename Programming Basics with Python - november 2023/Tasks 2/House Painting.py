x = float(input())
y = float(input())
h = float(input())

front_and_back_wall_area = (x * x * 2) - (2 * 1.2)
side_walls_area = (x * y * 2) - (1.5 * 1.5 * 2)
total_walls_area = front_and_back_wall_area + side_walls_area
total_green_paint = total_walls_area / 3.4

front_and_back_roof_area = 2 * (x * h / 2)
side_roofs_area = 2 * (x * y)
total_roof_area = front_and_back_roof_area + side_roofs_area
total_red_paint = total_roof_area / 4.3

print(f'{total_green_paint:.2f}')
print(f'{total_red_paint:.2f}')
