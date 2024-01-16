screening_type = input()
rows = int(input())
columns = int(input())
total_places = rows * columns
income = 0

if screening_type == "Premiere":
    income = total_places * 12
elif screening_type == "Normal":
    income = total_places * 7.50
else:
    income = total_places * 5.00

print(f"{income:.2f} leva")