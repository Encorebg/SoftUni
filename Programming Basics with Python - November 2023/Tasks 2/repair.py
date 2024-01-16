from math import ceil
height = int(input())
width = int(input())
percent_area_not_paint = int(input())
total_volume = height * width * 4
total_volume_to_paint = total_volume - total_volume * (percent_area_not_paint / 100)
all_is_painted = False
litres_paint = input()

while litres_paint != "Tired!":
    litres_paint = int(litres_paint)
    total_volume_to_paint -= litres_paint
    if total_volume_to_paint <= 0:
        all_is_painted = True
        break
    litres_paint = input()


if all_is_painted:
    if total_volume_to_paint < 0:
        print(f"All walls are painted and you have {abs(total_volume_to_paint):.0f} l paint left!" )
    else:
        print(f"All walls are painted! Great job, Pesho!" )
else:
    print(f"{ceil(total_volume_to_paint)} quadratic m left." )
