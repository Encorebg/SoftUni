import math

number_of_balls = int(input())
red_ball_counnter = 0
orange_ball_counter = 0
yellow_ball_counter = 0
white_ball_counter = 0
other_colors_counter = 0
points_counter = 0
divide_black_counter = 0

for balls in range(number_of_balls):
    color = input()

    if color == "red":
        red_ball_counnter += 1
        points_counter += 5
    elif color == "orange":
        orange_ball_counter += 1
        points_counter += 10
    elif color == "yellow":
        yellow_ball_counter += 1
        points_counter += 15
    elif color == "white":
        white_ball_counter += 1
        points_counter += 20
    elif color == "black":
        divide_black_counter += 1
        points_counter /= 2
        points_counter = math.floor(points_counter)
    else:
        other_colors_counter += 1

print(f"Total points: {points_counter}")
print(f"Red balls: {red_ball_counnter}")
print(f"Orange balls: {orange_ball_counter}")
print(f"Yellow balls: {yellow_ball_counter}")
print(f"White balls: {white_ball_counter}")
print(f"Other colors picked: {other_colors_counter}")
print(f"Divides from black balls: {divide_black_counter}")

