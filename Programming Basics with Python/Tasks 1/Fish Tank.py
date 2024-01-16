length = int(input())
width = int(input())
heigth = int(input())
percent = float(input())

volume = length * width * heigth
volume_in_litres = volume * 0.001
litres_needed = volume_in_litres * (1 - percent/100)
print(litres_needed)

