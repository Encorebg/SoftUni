number_of_groups = int(input())
musala = 0
monblan = 0
kilimanjaro = 0
k_2 = 0
everest = 0
total_climbers = 0

for _ in range(number_of_groups):
    number_of_people = int(input())
    total_climbers += number_of_people

    if number_of_people <= 5:
        musala += number_of_people
    elif number_of_people <= 12:
        monblan += number_of_people
    elif number_of_people <= 25:
        kilimanjaro += number_of_people
    elif number_of_people <= 40:
        k_2 += number_of_people
    else:
        everest += number_of_people

percent_musala = musala / total_climbers * 100
percent_monblan = monblan / total_climbers * 100
percent_kilimanjaro = kilimanjaro / total_climbers * 100
percent_k_2 = k_2 / total_climbers * 100
percent_everest = everest / total_climbers * 100

print(f'{percent_musala:.2f}%')
print(f'{percent_monblan:.2f}%')
print(f'{percent_kilimanjaro:.2f}%')
print(f'{percent_k_2:.2f}%')
print(f'{percent_everest:.2f}%')