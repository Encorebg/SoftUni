number_of_visitors = int(input())
back = 0
chest = 0
legs = 0
abs = 0
shake = 0
bar = 0
work_out = 0
protein = 0

for visitors in range(number_of_visitors):
    activity = input()

    if activity == "Back":
        back += 1
        work_out += 1
    elif activity == "Chest":
        chest += 1
        work_out += 1
    elif activity == "Legs":
        legs += 1
        work_out += 1
    elif activity == "Abs":
        abs += 1
        work_out += 1
    elif activity == "Protein shake":
        shake += 1
        protein += 1
    else:
        bar += 1
        protein += 1


percent_training = work_out / number_of_visitors * 100
percent_protein = protein / number_of_visitors * 100

print(f"{back} - back")
print(f"{chest} - chest")
print(f"{legs} - legs")
print(f"{abs} - abs")
print(f"{shake} - protein shake")
print(f"{bar} - protein bar")
print(f"{percent_training:.2f}% - work out")
print(f"{percent_protein:.2f}% - protein")